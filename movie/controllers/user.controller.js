const user = require("../models/user.schema")
//home
const Home = (req, res) => {
    res.send('Welcome to the movie API')
}


// user signup
const Usignup = async (req, res) => {
    const data = await user.findOne({ email: req.body.email })
    if (data) {
        res.send('your account already exist')
    }
    else {
        const create = await user.create(req.body)
        res.status(201).send(create)
    }
}

// user delete 
const Udelete = async (req, res) => {
    const { id } = req.params
    const data = await user.findByIdAndDelete(id)
    res.send({ message: 'User deleted successfully' })
}

// user login
const Ulogin = async (req, res) => {
    const data = await user.findOne({ username: req.body.username, password: req.body.password })
    if (data) {
        res.send({ message: 'Logged in successfully' })
    }
    else {
        res.status(401).json({ error: "Invalid username or password" })
    }
}

// all user
const userss = async (req, res) => {
    const data = await user.find()
    res.send(data)
}
module.exports = { Home, Usignup, Udelete, Ulogin, userss }