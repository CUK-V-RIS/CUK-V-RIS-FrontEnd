import {
  IconButton,
  Input,
  InputRightElement,
  InputLeftElement,
  FormControl,
  Box,
  useDisclosure,
  InputGroup,
  useToast
} from "@chakra-ui/react";
import React from "react";
import { BiListCheck, BiSearchAlt2 } from "react-icons/bi";
import { IoIosOptions } from "react-icons/io";
import styled from 'styled-components';
import "./SearchBar.css"
import { Link } from 'react-router-dom';
import SearchResult from "../../pages/SearchResult";
import axios from 'axios'; //result 결과 연결


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
        <Link to='/SearchResult'>
          <button type="button" id="search_btn" onClick={onClick}>
            <BiSearchAlt2 className="search_icon"></BiSearchAlt2>
          </button>
        </Link>
        <Link to='/mypage'>
          <button type="button" id="filter_btn" onClick={onClick}>
            <IoIosOptions className="filter_icon"></IoIosOptions>
        </button>
        </Link>
      </div>
    </>
  );

}

function Result({ veganres }) {
  
  var lis = [];
  for (var i = 0; i < veganres.length; i++){
    var item = veganres[i];
    lis.push(

    )
  }

}


  const url = '/v1/vegan-res/restaurantName/{resName}';







export default SerarchBar;