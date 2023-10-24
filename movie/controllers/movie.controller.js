const movie = require("../models/movie.schema");


// movie create 
const Mcreate = async (req, res) => {
    const data = await movie.create(req.body)
    res.status(201).send(data)
}

// movie update 
const Mupdate = async (req, res) => {
    const { id } = req.params
    const data = await movie.findByIdAndUpdate(id, req.body)
    const updated = await movie.findById(id)
    res.status(200).send(updated)
}

//movie delete
const Mdelete = async (req, res) => {
    const { id } = req.params
    const data = await movie.findByIdAndDelete(id)
    res.send({ message: "Movie deleted" })
}

//movie rating

const Mrating = async(req,res)=>{
    const {id} = req.params
    if(id){
        let data = await movie.findById(id)
        data.ratings.push({value : req.body.rating})
        await data.save()
        console.log(data);
        res.send(data)
    }
    else{
        res.send({error: "movie not found"})
    }

}

// movie comment

const Mcomment = async(req,res)=>{
    const {id} = req.params
    if(id){
        const data = await movie.findById(id)
        data.comments.push(req.body)
        await data.save()
        res.send(data)
    }
    else{
        res.send({error: "movie not found"})
    }
}

// movie filter

const Mfilter = async (req, res) => {
    let filterdata = await movie.find(req.query)
    res.send(filterdata)
}
module.exports = { Mcreate, Mupdate, Mdelete, Mfilter, Mrating, Mcomment }