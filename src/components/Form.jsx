import { useEffect, useState } from "react";

export default function Form() {
  let [Memes, setMemes] = useState({});
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((e) => {
        return e.json();
      })
      .then((e) => {
        setMemes(e);
      });
  }, []);
  console.log(Memes);
  let [memeURL, generate] = useState("https://i.imgflip.com/30b1gx.jpg");

  function Submit(e) {
    e.preventDefault();
    let newMeme =
      Memes.data.memes[Math.floor(Math.random() * Memes.data.memes.length)].url;

    generate(newMeme);
  }
  let [text, setText] = useState({
    topText: "",
    bottomText: "",
  });
  function handleChange(e) {
    let { name, value } = e.target;
    setText((e) => {
      return {
        ...e,
        [name]: value,
      };
    });
  }
  return (
    <main className="p-4 pt-5">
      <form
        onSubmit={Submit}
        action=""
        className="row w-100 justify-content-md-center"
      >
        <input
          type="text"
          name="topText"
          id=""
          placeholder="Upper Text"
          className="text col-5 me-auto p-2 rounded"
          onChange={handleChange}
          value={text.topText}
        />
        <input
          type="text"
          name="bottomText"
          id=""
          placeholder="Bottom Text"
          className="text col-5 p-2 rounded"
          onChange={handleChange}
          value={text.bottomText}
        />
        <button className="submit  col-12 mt-4 btn text-white fs-5 fw-bol ps-0 pe-0">
          Get a new meme image 🖼️
        </button>
      </form>
      {/* meme */}
      <div className="meme">
        <img className="image mb-3" src={memeURL} alt="image" />
        <h2 className="meme--text top">{text.topText}</h2>
        <h2 className="meme--text bottom">{text.bottomText}</h2>
      </div>
    </main>
  );
}
