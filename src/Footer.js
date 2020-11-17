import axios from 'axios'
import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
function Footer({children}) {
    const [fact, setFact] = useState()

    
    
    
    useEffect(() => {     
        const getIdx = () => {
            return Math.ceil(Math.random()* 20)
        }
        axios.get('https://cat-fact.herokuapp.com/facts')
            .then((res)=> {
                setFact(res.data.all[getIdx()].text)
            })
            .catch(()=> {
                console.log('no data! boo!')
            })
    }, [])



    return (
        <footer>

             <hr />
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-youtube"></a>
            <StyledCatQuote>
                <h3>Tech Cat Quote of the Day</h3>
                <p>{fact}</p>
            </StyledCatQuote>
            <h3>All Rights ® Reserved • Copyright © 2020</h3>
        </footer>
    )
}


const StyledCatQuote = styled.div`
    h3 {
        font-size: 1.5rem;
    }

    p {
        font-size:1rem;
    }


`


export default Footer;