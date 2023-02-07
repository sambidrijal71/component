
import Accordion from "../components/Accordion"

function AccordionPage() {
    const items = [{
        id: '1',
        label: 'Learn HTML first',
        content: 'HTML is the standard markup language for Web pages. With HTML you can create  your own Website. HTML is easy to learn - You will enjoy it!'
    },
    {
        id: '2',
        label: 'Learn CSS second',
        content: 'CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed. This tutorial will teach you CSS from basic to advanced.'
    },
    {
        id: '3',
        label: 'Learn JavaScript third',
        content: "JavaScript is the world's most popular programming language.JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced."
    },
    {
        id: '4',
        label: 'Finally learn React',
        content: 'React is a JavaScript library for building user interfaces. React is used to build single- page applications. React allows us to create reusable UI components.'
    }]
    return (
        <div >
            <Accordion items={items} />
        </div>
    )
}

export default AccordionPage