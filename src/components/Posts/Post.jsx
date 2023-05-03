import { Link } from "react-router-dom";
import { Image, Card, Container, Row, Col } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import "../../App.css";
import "../css/Sidebar.css";
import "../css/Content.css";

const Post = (props) => {

  return (
    <>
    <Card className="mt-3" style={{ width: '25em' }}>
      <Card.Body>
        <Card.Title>
        <Container>
        <Row>
        <Col xs={2}>
        <Link className="" to={`/profile/${props.userId}`}>
       <Image
          width={50}
          height={50}
          src={"http://localhost:4200/" +  props.authorAvatar}
          className="post-avatar"
        /> 
              
          </Link>
        </Col>

         <Col xs={9}>
         <Link className="post-header_user-data" to={`/profile/${props.userId}`}>
          <h4>{props.authorName}</h4> 
         </Link>
        </Col>

        <Col xs={1}>
        {props.profileId === props.loginId || props.userId === props.loginId ? (
            <AiFillDelete 
              onClick={() => props.deletePost(props.postId, props.profileId)}
              size={25}
              style={{cursor:"pointer"}}
            />
          ) : (
            <></>
          )}
          </Col>
        </Row>
        </Container>

        </Card.Title>
        <Card.Text>
        {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  );
};

export default Post;
