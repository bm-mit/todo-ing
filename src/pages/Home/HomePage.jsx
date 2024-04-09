import MainContainer from "@components/Containers/MainContainer";
import NavBar from "@components/NavBar/NavBar";
import NoteCard from "@components/Note/NoteCard";
import NoteEditor from "@components/Note/NoteEditor";
import NoteContainer from "@components/Note/NoteContainer";
import { homePagePropTypes } from "./propTypes";
import react from "@assets/react.svg";

import "./HomePage.css";

HomePage.propTypes = homePagePropTypes;

export default function HomePage({ className = "", style = {} }) {
  return (
    <MainContainer className={`p-0 vh-100 ${className}`} style={style}>
      <NavBar />
      <NoteContainer>
        <NoteCard
          header="Note title"
          content="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
          image={react}
        />
        <NoteCard header="Note title" />
      </NoteContainer>
      <NoteEditor />
    </MainContainer>
  );
}
