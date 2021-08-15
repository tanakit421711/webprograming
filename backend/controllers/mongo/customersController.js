const customers = require("../../models/mongo/customers");

// R-Read อ่านข้อมูล
exports.index = async (req, res, next) => {

    let data = await customers.find();
    
    res.status(200).json(data);
 
};

//C-Create เพิ่มข้อมูล
exports.insert = async (req,res,next) => {
    
    let data = new customers({
        customerID: req.body.ustomerID,
        customerTitleName: req.body.customerTitleName,
        customerFirstName:req.body.customerFirstName,
        customerLastName: req.body.customerLastName,
        customerAddress: req.body.customerAddress,
        customerTel: req.body.customerTel,
        customerEmail: req.body.customerEmail,
        customerUserName: req.body.customerUserName,
        customerPassword: req.body.customerPassword
    });

    data.save();
    res.status(200).json({
        message:"บันทึกข้อมูลเรียบร้อยแล้ว"
    })


};
//update ข้อมูล
exports.update = async (req, res , next) => {
    const id = "61191aa07e2e7c18243cc0d1";
    const data = {
        customerID :"42171",
        customerTitleName :"mr",
        customerFirstName :"tanakitqweqeq",
        customerLastName :"keawpinit",
        customerAddress :"19/20",
        customerTel :"0946013030",
        customerEmail :"tanakit42171@gmail.com",
        customerUserName :"tanakit42171",
        customerPassword :"0946013030",
};
    
   
    let update = await customers.updateOne(
{_id: id},
{
    customerID: data.ustomerID,
    customerTitleName: data.customerTitleName,
    customerFirstName:data.customerFirstName,
    customerLastName: data.customerLastName,
    customerAddress: data.customerAddress,
    customerTel: data.customerTel,
    customerEmail: data.customerEmail,
    customerUserName: data.customerUserName,
    customerPassword: data.customerPassword
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
// Delete ลบข้อมูล
exports.delete = async (req, res, next) => {
    const id = "6119199e5e30ea496422a454"
    const data = await customers.deleteOne(
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