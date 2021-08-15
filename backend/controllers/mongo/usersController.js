const users = require("../../models/mongo/users");

// R-Read get
exports.index = async (req, res, next) => {

    let data = await users.find();
    
    res.status(200).json(data);
 
};

//C-Create post
exports.insert = async (req,res,next) => {
    
    let data = new users({
username: req.body.username,
email: req.body.email
    });

    data.save();
    res.status(200).json({
        message:"บันทึกข้อมูลเรียบร้อยแล้ว"
    })


};
//update put
exports.update = async (req, res , next) => {
    const id = "60ebbd3d72ef2178351e9a39";
    const data = {
        username: "Nostria",
        email: "nostria@gmail.com"
    };
   
    let update = await users.updateOne(
{_id: id},
{
    username: data.username,
    email: data.email
}
    );
    
    if(update.nModified === 0){
        res.status(400).json({
            error: "ไม่สามารถแก้ไขข้อมูลได้"
        });
    } else {
        res.status(200).json({
            data: "แก้ไขข้อมูลเรียบร้อยแล้ว"
        });
    }    

};
// Delete   ลบ
exports.delete = async (req, res, next) => {
    const id = "60ebbd0572ef2178351e9a37"
    const data = await users.deleteOne(
        {_id: id }
    );
    if(data.deletedCount === 0){
        res.status(400).json({
            error:"ไม่สามารถลบข้อมูลได้"
        })
    }else{
        res.status(200).json({
            message:"ลบข้อมูลเรียบร้อยแล้ว"
        })
    }
};