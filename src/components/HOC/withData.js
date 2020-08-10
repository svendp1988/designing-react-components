import React from "react";

const withData = (maxNumberOfSpeakers) => (Component) => {
    const speakers = [
        {
            imageSrc: 'speaker-component-1124',
            name: 'Douglas Crockford',
        },
        {
            imageSrc: 'speaker-component-1530',
            name: 'Tamara Baker',
        },
        {
            imageSrc: 'speaker-component-10803',
            name: 'Eugene Chuvyrov',
        },
    ];
    return () => {
        const limitSpeakers = speakers.slice(0, maxNumberOfSpeakers);
        return <Component speakers={limitSpeakers}/>
    }
}

// function withData(maxNumberOfSpeakers) {
//     return function (Component) => {
//
//         const speakers = [
//             {
//                 imageSrc: 'speaker-component-1124',
//                 name: 'Douglas Crockford',
//             },
//             {
//                 imageSrc: 'speaker-component-1530',
//                 name: 'Tamara Baker',
//             },
//             {
//                 imageSrc: 'speaker-component-10803',
//                 name: 'Eugene Chuvyrov',
//             },
//         ];
//         return function () {
//             const limitSpeakers = speakers.slice(0, maxNumberOfSpeakers);
//             return <Component speakers={limitSpeakers}/>
//         }
//     }
//
// }

export default withData;
