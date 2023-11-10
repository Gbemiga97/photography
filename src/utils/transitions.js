 const transition1 = {
  duration: 1.4,
  ease: [0.6, 0.01, -0.05, 0.9],
  // ease: [0.43, 0.13, 0.23, 0.96],
};


const menuVariants = {
  hidden: {
    x: '100%'
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9 ],
    }
  }
}

const variants = {
  transition1,
  menuVariants,
}

export default variants
