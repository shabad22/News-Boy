import React, { useState, useEffect } from 'react'
import alanbtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards/NewsCards'
import wordsToNumbers from "words-to-number";
import useStyles from "./styles.js";

const alankey = '3676b2e02d0a1c05d363c2b82a2690882e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = () => {

    const [newsArticles, setNewsAtricles] = useState([])
    const [activeArticle, setActiveArticle] = useState(-1)
    const classes = useStyles()

    useEffect(() => {
        alanbtn({
            key: alankey,
            onCommand: ({ command, articles, number }) => {
                if(command === 'newHeadlines'){
                    setNewsAtricles(articles)
                    setActiveArticle(-1)
                } else if(command === 'highlight'){
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1 )
                } else if(command === 'open') {
                    const parsedNumber = number.length > 2 ? wordsToNumbers(number, {fuzzy: true}) : number;
                    const article = articles[parsedNumber - 1]
                    if(parsedNumber > 20) {
                        alanbtn().playText('Please try again ...')
                    } else if(article){
                        window.open(articles[number].url, '_blank')
                        alanbtn().playText('Opening ...')
                    }
                }

            }
        })
    }, [] )

    return (
        <div>
//             <div className={classes.logoContainer} >
//                 <img src={process.env.PUBLIC_URL + '/shogo.png'} className={classes.alanlogo} alt="NewsBoy!" />
//             </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
        </div>
    )
}

export default App
