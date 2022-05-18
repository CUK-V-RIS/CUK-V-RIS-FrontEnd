import React from "react";
import { BiListCheck, BiSearchAlt2 } from "react-icons/bi";
import styled from 'styled-components';
import "./SearchBar.css"
import {} from '@chakra-ui/react';


function SerarchBar({ onClick, onChange }) {
  return (
    <>
        <div className="input-group">
            <input id="input1"
          type="search"
          className="form-control rounded"
          placeholder="식당 이름을 입력해 주세요"
          onChange={onChange}
              />
        <button type="button" id="search_btn" onClick={onClick}>
          <BiSearchAlt2 className="search_icon"></BiSearchAlt2>
        </button>
      </div>
    </>
  );
}

export default SerarchBar;