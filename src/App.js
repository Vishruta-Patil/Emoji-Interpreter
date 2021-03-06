import "./styles.css";
import react, { useState } from "react";

const emojiDictionary = {
  "ð": "Grinning Face",
  "ð": "Smiling Face With Open Mouth & Cold Sweat",
  "ð": "Face With Tears of Joy",
  "ð": "Smiling Face With Smiling Eyes",
  "ð": "Slightly Smiling Face",
  "ð": "Winking Face",
  "ð": "Relieved Face",
  "ð": "Face With Heart-Eyes",
  "ð": "Face With Stuck-Out Tongue",
  "ð§": "Face With Monocle",
  "ð": "Face With Sunglasses",
  "ðĪĐ": "Smirking Face With Starry Eyes",
  "ðĨģ": "Face with party blower and party hat",
  "ð": "Unamused Face",
  "ð": "Disappointed Face",
  "ð": "Worried Face",
  "ðŦ": "Tired Face",
  "ðĨš": "Face with begging eyes",
  "ð­": "Loudly Crying Face",
  "ð ": "Angry Face",
  "ðĪ": "Face With Look of Triumph",
  "ðĄ": "Pouting Face",
  "ðĪŊ": "Face With Exploding Head",
  "ðĨķ": "Freezing face",
  "ðĻ": "Fearful Face",
  "ðĪ": "Hugging Face",
  "ðĪ": "Thinking Face",
  "ðĪŦ": "Exhorting Face",
  "ðŊ": "Speechless Face",
  "ð": "Smiling Face With Horns",
  "ðŋ": "Angry Face with Horns",
  "ð": "Winking Face with Tongue",
  "ðĪ­": "Face with Hand Over Mouth",
  "ðĪĨ": "Lying Face",
  "ðŠ": "Sleepy Face",
  "ðĪĪ": "Drooling Face",
  "ðī": "Sleeping Face",
  "ð·": "Face with Medical Mask",
  "ðĪ": "Face with Thermometer",
  "ðĪ": "Face with Head-Bandage",
  "ðĪĒ": "Nauseated Face",
  "ðĪŪ": "Face Vomiting",
  "ðĪ§": "Sneezing Face",
  "ðĨĩ": "Hot Face",
  "ðĨī": "Woozy Face",
  "ðĩ": "Dizzy Face",
  "ðĪ ": "Cowboy Hat Face",
  "ðĨą": "Yawning Face",
  "ð": "Confounded Face",
  "ðĢ": "Persevering Face",
  "ð": "Face Blowing a Kiss",
  "ð": "Kissing Face",
  "ð": "Kissing Face with Closed Eyes",
  "ð": "Kissing Face with Smiling Eyes",
  "ð": "Face Savoring Food",
  "ðĪŠ": "Zany Face",
  "ð": "Squinting Face with Tongue",
  "ðĪ": " Money-Mouth Face",
  "ð": "Beaming Face with Smiling Eyes",
  "ð": "Grinning Squinting Face",
  "ð": "Upside-Down Face",
  "ðĪ": "Zipper-Mouth Face",
  "ðĪĻ": "Face with Raised Eyebrow",
  "ð": "Neutral Face",
  "ð": "Expressionless Face",
  "ðķ": "Face Without Mouth",
  "ð": "Smirking Face",
  "ð": "Face with Rolling Eyes",
  "ðŽ": "Grimacing Face",
  "ð": "Pensive Face"
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
      <h1>EmojiPedia - Home of Emojis</h1>
      <input onChange={emojiInputHandler}></input>
      <h2> {meaning} </h2>
      <h3> Emojis We Know </h3>
      <div class="emoji-template">
        {emojisWeknow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{ fontSize: "3rem", padding: "1rem", cursor: "pointer" }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
