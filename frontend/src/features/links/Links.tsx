import React, { useState } from 'react';
import { LinkApi } from '../../../types';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { createShortenLink } from './linksThunks';
import { selectShortenLink } from './linksSlice';

const Links = () => {
  const dispatch = useAppDispatch();
  const shortenLink = useAppSelector(selectShortenLink);
  const [state, setState] = useState<LinkApi>({url: ''});

  const submitFormHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(createShortenLink({url: state.url}));
    setState({url: ''});
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setState(prevState => {
      return {...prevState, [name]: value};
    });
  };

  let info = null;

  if (shortenLink) {
    info = (
      <>
      <h3>Your link now looks like this:</h3>
    <p>{'http://localhost:8000/' + shortenLink}</p>
      </>
    )
  }

  return (
    <div>
      <h1>Shorten your link!</h1>
      <form
        autoComplete="off"
        onSubmit={submitFormHandler}
      >
      <input
        type="url"
        id="url"
        name="url"
        value={state.url}
        onChange={inputChangeHandler}
        required
      />
      <button type="submit">Shorten</button>
      </form>
      {info}
    </div>
  );
};

export default Links;