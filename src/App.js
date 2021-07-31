import "./styles.css";
import react, { useState } from "react";

const emojiDictionary = {
  "😀": "Grinning Face",
  "😅": "Smiling Face With Open Mouth & Cold Sweat",
  "😂": "Face With Tears of Joy",
  "😊": "Smiling Face With Smiling Eyes",
  "🙂": "Slightly Smiling Face",
  "😉": "Winking Face",
  "😌": "Relieved Face",
  "😍": "Face With Heart-Eyes",
  "😛": "Face With Stuck-Out Tongue",
  "🧐": "Face With Monocle",
  "😎": "Face With Sunglasses",
  "🤩": "Smirking Face With Starry Eyes",
  "🥳": "Face with party blower and party hat",
  "😒": "Unamused Face",
  "😞": "Disappointed Face",
  "😟": "Worried Face",
  "😫": "Tired Face",
  "🥺": "Face with begging eyes",
  "😭": "Loudly Crying Face",
  "😠": "Angry Face",
  "😤": "Face With Look of Triumph",
  "😡": "Pouting Face",
  "🤯": "Face With Exploding Head",
  "🥶": "Freezing face",
  "😨": "Fearful Face",
  "🤗": "Hugging Face",
  "🤔": "Thinking Face",
  "🤫": "Exhorting Face",
  "😯": "Speechless Face",
  "😈": "Smiling Face With Horns"
};

var emojisWeknow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var input = event.target.value;
    meaning = emojiDictionary[input];

    if (meaning === undefined) {
      meaning = "Emoji Not found !!!";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>insideee outtttt</h1>
      <input onChange={emojiInputHandler}></input>
      <h2> {meaning} </h2>
      <h3> Emojis We Know </h3>

      {emojisWeknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
