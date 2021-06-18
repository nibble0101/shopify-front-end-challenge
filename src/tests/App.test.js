import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders App component', () => {
  render(<App />);
  const homeMenuLinkText = screen.getByText("Home", {exact: true});
  const nominationsMenuLinkText = screen.getByText("Nominations", { exact: true});
  const brandNameTextOne = screen.getByText("MOVIE", { exact: true});
  const brandNameTextTwo = screen.getByText("DEN", { exact: true});
  const searchTextArray = screen.getAllByText("Search", { exact: true});
  const footerTextOne = screen.getByText("© Movie Den 2021. By", { exact: true});
  const footerLinkTextTwo = screen.getByText("Joseph Mawa", { exact: true});
  expect(homeMenuLinkText).toBeInTheDocument();
  expect(nominationsMenuLinkText).toBeInTheDocument();
  expect(brandNameTextOne).toBeInTheDocument();
  expect(brandNameTextTwo).toBeInTheDocument();
  expect(searchTextArray.length).toBe(2);
  expect(footerTextOne).toBeInTheDocument();
  expect(footerLinkTextTwo).toBeInTheDocument();

});
