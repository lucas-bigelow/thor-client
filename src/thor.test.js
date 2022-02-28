// import App from "./App/App";
// import { Router} from 'react-router-dom'
// import { createMemoryHistory } from 'history'
// import { render, fireEvent } from "@testing-library/react";
// import userEvent from '@testing-library/user-event'
// import "@testing-library/jest-dom";

// describe('Testing the Nav', () => {
//   it('From homepage "/" route, click #order-pizza, navigate to "/pizza" route', () => {
//     const history = createMemoryHistory();
//     render(
//       <Router history={history}>
//         <App />
//       </Router>
//     );
//     expect(history.location.pathname).toBe('/')
//     const trailsNavButton = document.querySelector('#trails-button')
//     expect(trailsNavButton).toBeInTheDocument();
//     console.log(trailsNavButton);
//     fireEvent(trailsNavButton, new MouseEvent('click', {
//       bubbles: true,
//       cancelable: true,
//     }));
//     expect(history.location.pathname).toBe('/trails')
//   });
// })
