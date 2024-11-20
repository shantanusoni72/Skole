// Imports
import HelpSVG from './assets/help.svg';
import HomeSVG from './assets/house.svg';
import PaperSVG from './assets/description.svg';

import News_Img_1 from './assets/news-1.webp';
import News_Img_2 from './assets/news-2.webp';
import News_Img_3 from './assets/news-3.webp';

// Intro - Home Page
export const intro_content = [
    {
        'shouted_heading': 'We',
        'normal_heading': 'are kindergarten and childhood is our passion.',
        'paragraph': 'We are excited and pleased to introduce you to the wonderful, passionate and committed educators who are working at Skole Learning Centre. Please take a moment to meet “Our Family!” We invited each of them to describe why they love working with children.'
    }
]


// News - Home Page
export const news_content = [
    {
        'image': News_Img_1,
        'tag': 'kids',
        'heading': 'The best learning toys for little kids, recommended by teachers!',
        'url': '#'
    },
    {
        'image': News_Img_2,
        'tag': 'educate',
        'heading': 'How to choose the best child care center for you!',
        'url': '#'
    },
    {
        'image': News_Img_3,
        'tag': 'DIY',
        'heading': 'Easy steps for choosing a cearning center – find just the right place.',
        'url': '#'
    },
  ]

// Action Info - Home Page
export const actionInfo = [
    {
        'image': HelpSVG,
        'heading': 'Any Questions?',
        'message':
            { 
                'text': 'Make an Enquiry',
                'link': '#'
            }
    },
    {
        'image': HomeSVG,
        'heading': 'See it Yourself!',
        'message':
            { 
                'text': 'Book a visit',
                'link': '#'
            }
    }, 
    {
        'image': PaperSVG,
        'heading': 'Ready to Join?',
        'message':
            { 
                'text': 'Register here',
                'link': '#'
            }
    }, 
]