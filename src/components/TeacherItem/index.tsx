import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return(
    <article className="teacher-item">
          <header>
            <img src="https://avatars1.githubusercontent.com/u/57634595?s=460&u=7c54ad1a3003330334c9113cc30260ef98e43273&v=4" alt="Will"/>
            <div>
              <strong>Willian Petri</strong>
              <span>Física</span>
            </div>
          </header>

          <p>
            lorem ipsum ushdaud adjosadh  asjdo jaioj iawih adasjd asd asdh ipasuhd asnasjdyuA A
            <br /><br />
            HDH DADBSSADHSADNKA Hdsahd ha idhausudha
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 100,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  )
}

export default TeacherItem;