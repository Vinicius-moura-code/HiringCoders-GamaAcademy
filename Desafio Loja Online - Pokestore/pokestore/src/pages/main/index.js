import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";

export default class Main extends Component {
  state = {
    pokemons: [],
    pokeInfo: {},
    page: 0,
  };

  componentDidMount() {
    this.loadPoke();
  }

  loadPoke = async (page = 0) => {
    const response = await api.get(`/v2/pokemon?offset=${page}&limit=20`);

    const { results, ...pokeInfo } = response.data;

    this.setState({ pokemons: results, pokeInfo, page });
  };

  prevPage = () => {
    const { page, pokeInfo } = this.state;

    if (page === 0) return;

    const pageNumber = page - 20;

    this.loadPoke(pageNumber);
  };

  nextPage = () => {
    const { page, pokeInfo } = this.state;

    if (page === pokeInfo.pages) return;

    const pageNumber = page + 20;

    this.loadPoke(pageNumber);
  };

  render() {
    const { pokemons, page, pokeInfo } = this.state;

    return (
      <div className="pokemon-list">
        {pokemons.map((pokemon) => (
          <article key={pokemon._id}>
            <p>{pokemon.name}</p>
            <p>{pokemon.url}</p>
            <a href="#">Buy</a>
          </article>
        ))}
        <div className="actions">
          <button disabled={ page === 0} onClick={this.prevPage}>Previous</button>
          <button disabled={ page === pokeInfo.pages} onClick={this.nextPage}>Next</button>
        </div>
      </div>
    );
  }
}
