import React from 'react';

const Footer = () => {
  return (
    <>
         <footer style={{position: 'sticky', bottom: 0}}>
            <div className="row">
                <div className="col-6">
                    <img src="" alt="logo" width={'8%'}/>
                    <p>© 2023. All Rights Reserved. Developed By AkeemBello</p>
                </div>
                <div className="col-6">
                    <p><i className="fa-solid fa-phone"></i> +1 (587) 575-2039</p>
                    <p><i className="fa-solid fa-envelope"></i> belloakeem07@gmail.com</p>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer