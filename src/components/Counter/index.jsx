import React, { useState, useEffect, useCallback, useMemo } from "react";

export default function Counter({ step: initialStep }) {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(initialStep);
  const [tickTime, setTickTime] = useState(1000);
  const [counterIntervalId, setCounterIntervalId] = useState(0);
  const [remainingIntervalId, setRemainingIntervalId] = useState(0);
  const [duration, setDuraiton] = useState(5000);
  const [remainingTime, setRemainingTime] = useState(duration / 1000);
  const [mode, setMode] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [autoStartOngoing, setAutoStartOngoing] = useState(false);

  //Смена отображения операции
  const mathOperationIcon = useMemo(() => (mode ? "+" : "-"), [mode]);

  const increment = useCallback(() => {
    setCounter((prevCounter) => prevCounter + Number(step));
  }, [step]);

  const decrement = useCallback(() => {
    setCounter((prevCounter) => prevCounter - Number(step));
  }, [step]);

  //Нажатие на кнопку выполнить
  const autoOperation = useCallback(() => {
    //Выставить оставшееся время в значение из поля, т.к. did mount ставит в 0
    setRemainingTime(Math.round(duration / 1000));

    //Откл кнопку автозапуска
    setDisabled(true);

    //Выбрать операцию и запустить интервал
    let counterIntervalId;

    mode
      ? (counterIntervalId = setInterval(increment, tickTime))
      : (counterIntervalId = setInterval(decrement, tickTime));

    setCounterIntervalId(counterIntervalId);

    //Отображать сколько секунд осталось
    setRemainingIntervalId(
      setInterval(() => {
        setRemainingTime((prevState) => Math.round(prevState) - 1);
      }, 1000)
    );
  }, [increment, decrement, tickTime, duration, mode]);

  //Останавить автосчётчик спустя duration
  useEffect(() => {
    const autoStartTimeoutId = setTimeout(() => {
      clearInterval(counterIntervalId);
      clearInterval(remainingIntervalId);
      setDisabled(false);
    }, duration);

    return () => clearTimeout(autoStartTimeoutId);
  }, [counterIntervalId, remainingIntervalId, duration]);

  //При запуске компонента сразу запускать автоклик. С частотой 1s, и шагом в 1.
  useEffect(() => {
    const autoStartIncrementId = setInterval(increment, 1000);
    setDisabled(true);
    setAutoStartOngoing(true);

    const autoStartDurationId = setInterval(() => {
      setRemainingTime((prevState) => Math.round(prevState) - 1);
    }, 1000);

    const autoStartTimeoutId = setTimeout(() => {
      clearInterval(autoStartDurationId);
      clearInterval(autoStartIncrementId);
      setAutoStartOngoing(false);
      setDisabled(false);
    }, duration + 50);

    return () => clearTimeout(autoStartTimeoutId);
  }, []);

  //Сброс
  const reset = useCallback(() => {
    clearInterval(counterIntervalId);
    clearInterval(remainingIntervalId);

    setDisabled(false);
    setCounter(0);
    setStep(initialStep);
    setTickTime(1000);
    setDuraiton(5000);
  }, [counterIntervalId, remainingIntervalId, initialStep]);

  const handleTickTime = useCallback(
    ({ target: { value } }) => setTickTime(Number(value)),
    []
  );
  const handleDuration = useCallback(
    ({ target: { value } }) => setDuraiton(Number(value)),
    []
  );

  const changeMathOperation = useMemo(
    () =>
      mode ? (
        <button onClick={increment}>Добавить {step}</button>
      ) : (
        <button onClick={decrement}>Отнять {step}</button>
      ),
    [increment, decrement, mode, step]
  );

  const isStepMoreThanZero = useMemo(() => (step > 0 ? "Шаг:" : null), [step]);

  const isStepVoid = useMemo(
    () => (step !== "" ? changeMathOperation : "<- Введите шаг"),
    [step, changeMathOperation]
  );

  const isRemainingTimeVisible = useMemo(
    () => (disabled ? `Осталось ${remainingTime} с` : null),
    [disabled, remainingTime]
  );

  return (
    <>
      Математическая операция:
      <button onClick={() => setMode(!mode)}>{mathOperationIcon}</button>
      <div>{counter}</div>
      <label htmlFor="step">
        {isStepMoreThanZero}
        <input
          type="number"
          name="step"
          id="step"
          value={step}
          onChange={({ target: { value } }) =>
            setStep(value !== "" ? Number(value) : value)
          }
          placeholder="Step"
        />
      </label>
      {isStepVoid}
      <div>
        <label htmlFor="time">
          Выполнять операцию каждые:
          <input
            type="number"
            name="time"
            id="time"
            value={tickTime}
            onChange={handleTickTime}
            placeholder="Time"
          />
        </label>
        мс
        <div>
          <label htmlFor="time">
            На протяжении:
            <input
              type="number"
              name="time"
              id="time"
              value={duration}
              onChange={handleDuration}
              placeholder="Time"
            />
          </label>
          мс
        </div>
      </div>
      <div>{isRemainingTimeVisible}</div>
      <button
        onClick={autoOperation}
        disabled={typeof step !== "number" ? true : false || disabled}
      >
        Выполнить
      </button>
      <div>
        <button onClick={reset} disabled={autoStartOngoing}>
          Сбросить
        </button>
      </div>
    </>
  );
}
