# Overview

![shopify challenge](/shopify-challenge.png?raw=True)

## Movie Rating App

[![Github actions CI](https://github.com/nibble0101/shopify-front-end-challenge/actions/workflows/build.yaml/badge.svg)](https://github.com/nibble0101/shopify-front-end-challenge/actions/workflows/build.yaml)

This is my solution for Shopify Front-end Intern challenge 2021.

## Challenge description

We need a webpage that can search [OMDB](http://www.omdbapi.com/apikey.aspx) for movies, and allow the user to save their favourite films they feel should be up for nomination. When they've selected 5 nominees they should be notified they're finished.

We'd like a simple to use interface that makes it easy to:

- Search OMDB and display the results (movies only)
- Add a movie from the search results to our nomination list
- View the list of films already nominated
- Remove a nominee from the nomination list

## Technical requirements

1. Search results should come from [OMDB's API](http://www.omdbapi.com/apikey.aspx).
2. Each search result should list at least its title, year of release and a button to nominate that film.
3. Updates to the search terms should update the result list.
4. Movies in search results can be added and removed from the nomination list.
5. If a search result has already been nominated, disable its nominate button.
6. Display a banner when the user has 5 nominations.

## Extras

There is a lot to be improved on here, you can polish the required features by crafting a nicer design, or improve the app by adding new features! Choose something that you feel best showcases your passion and skills.

If you need inspiration, here are examples of what you can work on. If you work on these ideas, we recommend choosing only one or two.

- Save nomination lists if the user leaves the page
- Animations for loading, adding/deleting movies, notifications
- Create shareable links

## Submission

Please submit your application via “Apply Now” and make sure you include:

- A link to your hosted code so we can test it (Free hosting available via: Github pages, Netlify and heroku)
- A link to your Github repository containing the code
- Any other notes you'd like us to consider alongside the page

## Extra features

- Save nominated movies
- Add rating to movies
- Persist movie rating
- Change movie rating

## Dependencies

- [react](https://reactjs.org/)
- [react-router](https://reactrouter.com/)
- [react-hamburger-menu](https://www.npmjs.com/package/react-hamburger-menu)
- [react-rating-stars-component](https://www.npmjs.com/package/react-rating-stars-component)

## Deployed project

[LIVE SITE](https://movie-den.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/463df919-0a0b-4ea7-9e55-c5bf6d473a6d/deploy-status)](https://app.netlify.com/sites/movie-den/deploys)
