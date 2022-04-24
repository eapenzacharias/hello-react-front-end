import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage } from './features/greeting/greeting';

const Greetings = () => {
  const message = useSelector(state => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessage());
  }, []);

  return (
    <article>
      <h1 className="greeting">{message}</h1>
    </article>
  );
};

export default Greetings;
