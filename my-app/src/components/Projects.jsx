import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
    <motion.a
      href="https://comfy-go-neon.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      variants={fadeInUp}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="project-image"
        style={{ backgroundImage: "url('/projects/comfy1.PNG')" }}
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      />
      <h3>ComfyGo</h3>
      <p>Discover and book your hotel — fast, simple, and comfy</p>
      <div className="project-tech">
        <span>Next.js</span>
        <span>Typescript</span>
        <span>TailwindCSS</span>
        <span>ShadCN</span>
        <span>Prisma</span>
        <span>Zustand</span>
      </div>
    </motion.a>

   <motion.a
      href="https://comfy-zone.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      variants={fadeInUp}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="project-image"
        style={{ backgroundImage: "url('/projects/Comfy2.PNG')" }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      />
      <h3>ComfyZone</h3>
      <p>
        Users can share posts, like, comment, and follow others in a friendly and comfy space.
      </p>
      <div className="project-tech">
        <span>Next.js</span>
        <span>Typescript</span>
        <span>TailwindCSS</span>
        <span>Clerk</span>
        <span>Neon</span>
        <span>Uploadthing</span>
      </div>
    </motion.a>
  </motion.div>
    </motion.section>
  );
};
