import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import { Card } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Heart, Sparkles, Star, Coffee } from 'lucide-react'

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    const hour = new Date().getHours()
    if (hour < 12) {
      setGreeting('Good Morning')
    } else if (hour < 18) {
      setGreeting('Good Afternoon')
    } else {
      setGreeting('Good Evening')
    }

    return () => clearInterval(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <Layout>
      <div className="min-h-screen relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
            animate={floatingAnimation}
          />
          <motion.div
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-xl"
            animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
          />
          <motion.div
            className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-xl"
            animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            {/* Main Greeting Card */}
            <motion.div variants={itemVariants}>
              <Card className="p-12 bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl">
                <div className="space-y-6">
                  <motion.div
                    className="flex items-center justify-center space-x-2 mb-4"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Sparkles className="w-8 h-8 text-yellow-400" />
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {greeting}
                    </Badge>
                    <Sparkles className="w-8 h-8 text-yellow-400" />
                  </motion.div>

                  <motion.h1
                    className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Hello Ismail
                  </motion.h1>

                  <motion.div
                    className="flex items-center justify-center space-x-2"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Heart className="w-6 h-6 text-red-400" />
                    <p className="text-xl text-white/80">
                      Welcome to your glassmorphic world
                    </p>
                    <Heart className="w-6 h-6 text-red-400" />
                  </motion.div>
                </div>
              </Card>
            </motion.div>

            {/* Time Display */}
            <motion.div variants={itemVariants}>
              <Card className="p-6 bg-white/5 backdrop-blur-lg border-white/10 max-w-md mx-auto">
                <div className="flex items-center justify-center space-x-3">
                  <Coffee className="w-5 h-5 text-amber-400" />
                  <p className="text-lg text-white/90 font-mono">
                    {currentTime.toLocaleTimeString()}
                  </p>
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
              </Card>
            </motion.div>

            {/* Interactive Elements */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-lg"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Explore Magic
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                >
                  <Star className="w-4 h-4 mr-2" />
                  Discover More
                </Button>
              </motion.div>
            </motion.div>

            {/* Feature Cards */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
            >
              {[
                { icon: Sparkles, title: "Glassmorphic Design", desc: "Beautiful frosted glass effects" },
                { icon: Heart, title: "Personalized", desc: "Made specially for Ismail" },
                { icon: Star, title: "Interactive", desc: "Smooth animations and transitions" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="p-6 bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="text-center space-y-3">
                      <feature.icon className="w-8 h-8 mx-auto text-blue-400" />
                      <h3 className="text-lg font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-white/70">
                        {feature.desc}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}