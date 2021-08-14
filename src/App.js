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
  "😈": "Smiling Face With Horns",
  "👿": "Angry Face with Horns",
  "😜": "Winking Face with Tongue",
  "🤭": "Face with Hand Over Mouth",
  "🤥": "Lying Face",
  "😪": "Sleepy Face",
  "🤤": "Drooling Face",
  "😴": "Sleeping Face",
  "😷": "Face with Medical Mask",
  "🤒": "Face with Thermometer",
  "🤕": "Face with Head-Bandage",
  "🤢": "Nauseated Face",
  "🤮": "Face Vomiting",
  "🤧": "Sneezing Face",
  "🥵": "Hot Face",
  "🥴": "Woozy Face",
  "😵": "Dizzy Face",
  "🤠": "Cowboy Hat Face",
  "🥱": "Yawning Face",
  "😖": "Confounded Face",
  "😣": "Persevering Face",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "😚": "Kissing Face with Closed Eyes",
  "😙": "Kissing Face with Smiling Eyes",
  "😋": "Face Savoring Food",
  "🤪": "Zany Face",
  "😝": "Squinting Face with Tongue",
  "🤑": " Money-Mouth Face",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "🙃": "Upside-Down Face",
  "🤐": "Zipper-Mouth Face",
  "🤨": "Face with Raised Eyebrow",
  "😐": "Neutral Face",
  "😑": "Expressionless Face",
  "😶": "Face Without Mouth",
  "😏": "Smirking Face",
  "🙄": "Face with Rolling Eyes",
  "😬": "Grimacing Face",
  "😔": "Pensive Face"
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
