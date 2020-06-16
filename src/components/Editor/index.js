import React, { useState } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import PropTypes from 'prop-types';

import { Container, Action, Group } from './styles';
import { Title } from '../../pages/Create/styles';

export default function Editor({createNewPost, updateValueAttributes}) {
  const [value, setValue] = useState("")

  const handleChange = (e, editor) => {
    const data = editor.getData()
    setValue(data) 
  }

  const validationBeforeCreatePost = () => {
    if(value === "")
      return alert("O Post está vazio");
    createNewPost(value);
  }

  return (
    <Container>
        <CKEditor
            onInit={ editor => {
                // Insert the toolbar before the editable area.
                editor.ui.getEditableElement().parentElement.insertBefore(
                    editor.ui.view.toolbar.element,
                    editor.ui.getEditableElement()
                );
            } }
            onChange={ handleChange }
            editor={ DecoupledEditor }
            data=""
        />
        <Action>          
          <button onClick={validationBeforeCreatePost}>Enviar</button>
        </Action>
        
    </Container>
  );
}

Editor.propTypes = {
  createNewPost: PropTypes.func.isRequired
}