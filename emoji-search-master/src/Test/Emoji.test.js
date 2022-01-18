import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import userEvent from "@testing-library/user-event";
import React from 'react';
import App from "../App";
/*
Başlık kısmının başarılı bir şekilde render edildiğini kontrol edecek olan test kodunu yazın.
Uygulama ilk açıldığında emoji listesinin başarılı bir şekilde render edildiğini kontrol edecek olan test kodunu yazın.
Bir filtreleme işlemi yapıldığında, emoji listesinin bu filtreye uygun şekilde yeniden render edildiğini kontrol edecek olan test kodunu yazın.
Liste üzerinden herhangi emojiye tıklandığında, ilgili emojinin kopyalandığını kontrol edecek olan test kodunu yazın.
* */

describe("",()=>{

    beforeEach(()=>{
        render(<App/>)
    })
    test("Başlık kısmının başarılı bir şekilde render edildiğinin kontrol edilmesi",()=>{
        const header = screen.getByRole("header")
        expect(header).toBeInTheDocument();
    })
    test("Uygulama ilk açıldığında emoji listesinin başarılı bir şekilde render edildiğinin kontrol edilmesi",()=>{
        const header = screen.getAllByText("Click to copy emoji")
        expect(header.length).toEqual(20)
    })
    test("Bir filtreleme işlemi yapıldığında, emoji listesinin bu filtreye uygun şekilde yeniden render edilmesi",()=>{
        const name = "100"
        const input = screen.getByTestId("text");
        userEvent.type(input,name);
        expect(screen.getByText(name)).toBeInTheDocument()
    })
    test("Liste üzerinden herhangi emojiye tıklandığında, ilgili emojinin kopyalandığının kontrol edilmesi",()=>{
       const button = screen.getByLabelText("1234")
        userEvent.click(button)
    })
})