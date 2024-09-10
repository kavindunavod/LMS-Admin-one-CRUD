const User = require("../Model/UserModel");

//data display part
const getAllUsers = async (req, res, next) => {
    let users;

    try {
        users = await User.find();
    } catch (err) {
        console.log(err);
    }

    if (!users) {
        return res.status(404).json({ message: "unable to add a user" });
    }

    return res.status(200).json({ users });
};

// data insert

const addUsers= async (req,res,next)=>{

    const {name,description,category,credit} = req.body;
    let users;

    try{
        users = new User({name,description,category,credit});
        await users.save();

    }catch(err){
        console.log(err);
    }

    //if not insert users
    if(!users){
        return res.status(404).json({message:"User Not Found"});
    }
    return res.status(200).json({users});


}

//get by id
const getById= async (req,res,next)=>{
    
    const id = req.params.id;
    let user;

    try{
        user = await User.findById(id);
    }catch(err){
        console.log(err);
    }
    if (!user) {
        return res.status(404).json({ message: "User Not Found" });
    }

    return res.status(200).json({ user });
}

//update user details
const updateUser= async(req,res,next)=>{
    const id = req.params.id;
    const {name,description,category,credit} = req.body;

    let users;

    try{
        users=await User.findByIdAndUpdate(id,
            {name: name,description:description,category:category,credit:credit});
            users = await users.save();
        
    }catch(err){
        console.log(err);
    }
    if (!users) {
        return res.status(404).json({ message: "Unable to upload user details" });
    }

    return res.status(200).json({ users });

}


const deleteUser = async(req,res,next)=>{
    const id = req.params.id;
    let user;

    try{
        user=await User.findByIdAndDelete(id);
    }catch(err){
        console.log(err);
    }
    if (!user) {
        return res.status(404).json({ message: "Unable to delete" });
    }

    return res.status(200).json({ user });

}



exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;
exports.updateUser= updateUser;
exports.deleteUser= deleteUser;