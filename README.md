# React Counter App – State Management Demo

## Overview
This project is a simple React application built using Vite. It demonstrates key concepts of React state management using the `useState` hook, including asynchronous updates, batching, and the idea of state as a snapshot.

---

## Features

The application includes a Counter component with four buttons:

1. **Increment**
   - Increases the count by 1

2. **Increment After Delay**
   - Increases the count by 1 after a 2-second delay using `setTimeout`

3. **Increment Twice (Incorrect)**
   - Attempts to increment the count by 2 using:
   ```js
   setCount(count + 1);
   setCount(count + 1);

   Demonstrates React batching behavior (only increments by 1)

4. **Correct Increment Twice**

- Correctly increments by 2 using:
```js
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```
## Video Demonstration: 
https://youtu.be/DV--pajOHe4

## Test Cases
Normal Cases

- Increment increases count by 1

- Delayed increment works after 2 seconds

- Correct increment twice increases count by 2

## Edge Cases

- Incorrect increment twice only increases by 1 (batching)

- Rapid clicking still updates correctly

- Multiple delayed clicks stack and execute later

## How to Run the Project

1. Clone the repository
git clone https://github.com/PaulinaS123/Create-a-Counter-Component-with-State-Management.git

2. Navigate into the project
```js   
cd portfolio-app
```
4. Install dependencies
```js
npm install
```
6. Start development server
```js
npm run dev
```
8. Open in browser
   
