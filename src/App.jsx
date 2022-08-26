import { useState } from "react";
import Data from "./quotes.json";
import QuoteBox from "./components/QuoteBox";
import Author from "./components/Author";
import Button from "./components/Button";
import "./App.css";

function App () {
  
  // SETTING RANDOM USER IN DATA
	const randomIndex = Math.floor(Math.random() * Data.length);
	const [index, setIndex] = useState(randomIndex);

  // SETTING COLORS 
	const [color, setColor] = useState("red");
	const [bg, setBg] = useState("red-bg");

  // COLOR CLASSES ARRAY
	const colorsArray = [
		"red",
		"green",
		"blue",
		"purple",
		"pink",
		"yellow",
		"violet",
	];
	const bgArray = [
		"red-bg",
		"green-bg",
		"blue-bg",
		"purple-bg",
		"pink-bg",
		"yellow-bg",
		"violet-bg",
	];

  // ONCLICK FUNCTION
  function changeColors () {
    
    const randomNumber = Math.floor(Math.random() * colorsArray.length);
    // STORE RANDOM COLORS
		const colorValue = colorsArray[randomNumber];
		const bgValue = bgArray[randomNumber];
    // RENDER NEW VALUES OF COLORS
		setColor(colorValue);
		setBg(bgValue);
		setIndex(randomIndex);
	}

	return (
		<div className={`App ${bg}`}>
			<div className="container-quote">
        <QuoteBox
          color={color}
          quote={Data[index].quote} />
        <Author
          color={color}
          author={Data[index].author} />
        <Button
          bg={bg}
          changeColors={changeColors} />
			</div>
		</div>
	);
}

export default App;
