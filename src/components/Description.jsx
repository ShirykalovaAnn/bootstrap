import React from 'react'
import {motion} from 'framer-motion'
import '../App.css'

const Description = () => {
  return (
    <div>
      <div>
  {/*  <div>Description</div>

    <motion.img
    width={'15%'}
    src='/img/icon.png'
    alt=''

    //анимация
    animate={{rotate:360}}
    transition={{
      delay:2,
      duration:5,
      repeat:Infinity,
      repeatDelay:0.5,
      repeatType:'reverse',
      type:'inertia',
    }}
    />
    
    <motion.p
    initial={{
      x: -1000,
      opacity: 0
    }}
    animate={{
      x: 500,
      opacity: 1
    }}
    transition={{
      delay:1,
      duration:2,
      type:'tween',
    }}
    >
      
      Текст, который появится
  </motion.p>*/}
      </div>
      <div>
      {/*<motion.div id='div1'
        initial={{
          x: -1000,
          opacity: 0
        }}

        animate={{
          x: 0,
          opacity: 1
        }}

        transition={{
          delay: 1,
          duration: 2,
        }}
      > 
        Добавляем любой текст, 
        который бует появляться на экране.
      </motion.div>

      <motion.div id='div2'
      initial={{
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        delay: 1,
        duration: 2,
      }}>
        <motion.img
        src='/img/banner-new.jpeg'
        className='banner'
        width={750}
        initial={{
          opacity: 0.6,
        }}

        transition={{
          duration: 5,
        }}

        whileTap={{
          rotate: 360,
        }}
        />
      </motion.div>
      <div id = 'divImg'>
      <motion.div id='div3'
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        scale: 1,
        opacity: 1
      }}
      transition={{
        duration: 2,
      }}>
        <motion.img
        src='/img/ball.jpg'
        className='ball'
        width={200}
        initial={{
          opacity: 0.6,
        }}

        transition={{
          duration: 5,
        }}

        whileHover={{
          scale: 1.5,
          transition: {
            duration: 2,
          }
        }}
        />
      </motion.div>

      <motion.div id='div4'
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        scale: 1,
        opacity: 1
      }}
      transition={{
        duration: 2,
      }}>
        <motion.img drag='x'
        src='/img/ball.jpg'
        className='ball'
        width={200}
        initial={{
          opacity: 0.6,
        }}

        transition={{
          duration: 5,
        }}

        whileDrag={{
          scale: 1.5,
        }}
        />
      </motion.div>

      <motion.button className='btn btn-primary'
      whileHover={{
        scale: 1.2,
      }}>
      Нажми
      </motion.button>*/}
      </div>
      <div>
      <motion.div id='div1'
        initial={{ 
          opacity: 0, 
          scale: 0.5 
        }}

        animate={{
          y: 0,
          opacity: 1
        }}

        transition={{
          duration: 5,
          delay: 0.3,
          ease: [0.5, 0.71, 1, 1.5],
      }}
      
      whileHover={{ 
        scale: 1.2 
      }}
      > 
        Приветствуем Вас в высокогорье.
        Желаем насладиться местными красотами и наичистейшим воздухом.
      </motion.div>

      <motion.div id='div2'>
        <motion.img
        src='/img/1.jpeg'
        className='1'
        width={'15%'}

        initial={{
          opacity: 0.6,
        }}

        transition={{
          duration: 5,
        }}

        whileHover={{ 
          scale: 1.2 
        }}
        />
      </motion.div>

      <motion.div id='div3'>
      <motion.button className='btn btn-primary'
      
      whileHover={{
        scale:[1,2,2,1,1],
        rotate: [0,-120,270,360,0],
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeatDelay: 1,
      }}>
      Купить тур
      </motion.button>
      </motion.div>

      </div>
    </div>
  )
}

export default Description