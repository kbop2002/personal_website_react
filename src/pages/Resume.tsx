import React from "react";

export default function Resume(){
    return(
        <>
            <div style={{ marginTop: '20px', textAlign: 'center' ,width:'50vw'}}>
                <object 
                data="/Achukwu.pdf" 
                title='My Resume'
                type="application/pdf" 
                width="800px" 
                height="1100px"
                >
                    <p>
                        Your browser does not support PDFs. 
                        <a href="/Achukwu.pdf" download>Download the PDF</a> instead.
                    </p>
            </object>
        </div>
      </>
    )
}