const model = require('./model')

// post api
const add = async(req, res) => {
    const {fname, email, password, mobile,  address} = req.body;
    try {
        const data = new model({
            fname, email, password, mobile,  address
        });
        const userdata = await data.save()
        res.send({userdata});
    }
    catch (error){
        console.log(error);
        return res.status(500).json({ message:'internal servar error'})
    }
}

// get api
const getdata = async (req, res) => {
    try {
        const data = await model.find()
        res.status(200).send({data})
    }
    catch (error){
        console.log(error);
        return res.status(400).json({ message:'internal servar error'})
    }
}

// Delete api
const deleteuser = async (req, res) => {
    try {
        const data = await model.deleteOne({ _id: req.params._id})
        res.status(200).send({ data })
    }

    catch (error) {
        res.status(500).send(error)
    }
}



module.exports = { add, getdata, deleteuser }