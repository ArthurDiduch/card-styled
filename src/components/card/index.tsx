import IconImage from "../../assets/download (1).jpeg";
import {
  ActionsButton,
  CardContainer,
  Container,
  ContentInformation,
  DataDetails,
  DetailsInformation,
  ImgBox,
  Lines,
  TextDataDetails,
  TextDetails,
} from "./styles";

export function Card() {
  return (
    <Container>
      <CardContainer>
        <Lines></Lines>
        <ImgBox>
          <img src={IconImage} alt="icon" />
        </ImgBox>

        <ContentInformation>
          <DetailsInformation>
            <TextDetails>
              <h2>Dragnar</h2>
              <span>The great</span>
            </TextDetails>
            <DataDetails>
              <TextDataDetails>
                <h3>350</h3>
                <span>Posts</span>
              </TextDataDetails>
              <TextDataDetails>
                <h3>150</h3>
                <span>Followers</span>
              </TextDataDetails>
              <TextDataDetails>
                <h3>300</h3>
                <span>Following</span>
              </TextDataDetails>
            </DataDetails>
            <ActionsButton>
              <button>Follow</button>
              <button>Message</button>
            </ActionsButton>
          </DetailsInformation>
        </ContentInformation>
      </CardContainer>
    </Container>
  );
}
