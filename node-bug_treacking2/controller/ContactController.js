
const contactSchema = require("../schema/ContactSchema")


const updateContact = (req, res) => {

    const id = req.params.id

    contactSchema.findByIdAndUpdate(id, req.body, (err, success) => {


        if (err) {
            res.status(500).json({
                message: "Error in updating Contact",
                err: err
            })
        }
        else {
            if (success != null || success != undefined) {
                res.status(200).json({
                    message: " Contact updated successfully",
                })
            }
            else {
                res.status(404).json({
                    message: " Contact not found",
                })
            }



        }


    })



}

const deleteContact = (req, res) => {
    const id = req.params.id

    contactSchema.findByIdAndDelete(id, (err, data) => {

        if (err) {
            res.status(500).json({
                message: "Error in deleting Contact",
                err: err
            })
        }
        else {
            if (data != null || data != undefined) {
                res.status(200).json({
                    message: "Contact deleted successfully",
                    data: data
                })
            }
            else {
                res.status(404).json({
                    message: " data not found",
                })
            }
        }


    })
}



const getContactById = (req, res) => {
    const id = req.params.id;
    contactSchema.findById(id)
        .exec((err, data) => {
            if (err) {
                res.status(500).json({
                    message: "Error in getting Contact",
                    err: err
                });
            } else {
                if (data) {
                    res.status(200).json({
                        message: "Contact fetched successfully",
                        data: data
                    });
                } else {
                    res.status(404).json({
                        message: "Contact not found"
                    });
                }
            }
        });
};

const addContact = (req, res) => {

    const module = new contactSchema(req.body)
    module.save((err, data) => {

        if (err) {
            res.status(500).json({
                message: "Error in saving Contact",
                err: err
            })
        }
        else {
            res.status(201).json({
                message: "Contact saved successfully",
                data: data
            })
        }


    })
}


const getAllContact = (req, res) => {


    contactSchema.find((err, data) => {
        if (err) {
            res.status(500).json({
                message: "Error in fetching contact",
                err: err
            })
        }
        else {
            if (data != null || data != undefined || data.length != 0) {
                res.status(200).json({
                    message: "contact fetched successfully",
                    data: data
                })
            }
            else {
                res.status(404).json({
                    message: "contact not found",
                })
            }
        }
    })

}



module.exports = {

    updateContact,
    deleteContact,
    getContactById,
    getAllContact,
    addContact,
    // getTaskIdByProject
}