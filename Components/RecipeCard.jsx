import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import styles from '../styles/Column.module.scss';
import Button from 'react-bootstrap/Button';
export default function RecipeCard(props) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className={styles.cardWrapper + ' d-flex position-relative'}>
        <img src={props.card.img} />
        {props.refreshable && <span className={styles.swapButton}>🔀</span>}
        <div className='d-flex h-100 flex-column flex-grow-1 justify-content-around'>
          <p className='m-0 font-weight-bold'>{props.card.title}</p>
          <p className='m-0'>{props.card.description}</p>
          {props.card.buttonLink && (
            <Button className='align-self-center' onClick={() => setShow(true)}>
              Rezept
            </Button>
          )}
        </div>
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop='static'
        centered={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {props.card.recipe ? props.card.recipe.title : 'Title'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="d-flex flex-column align-items-center">
          <div className="col-8">
            {props.card.recipe.ingredients.map((ingredient) => (
              <span className='d-flex justify-content-between'>
                <p>{ingredient[0]}</p>
                <p>{ingredient[1]}</p>
              </span>
            ))}
               </div>
            <p>{props.card.recipe.instructions}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setShow(false)}>
            Schließen
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
