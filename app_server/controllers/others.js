/* GET homepage */
const about = (req, res) => {
    res.render('generic-text',
        {
            title: 'About BookTangle',
            content: '\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem ac nisi dignissim accumsan. Nullam sit amet interdum magna. Morbi quis faucibus nisi. Vestibulum mollis purus quis eros adipiscing tristique. Proin posuere semper tellus, id placerat augue dapibus ornare. Aenean leo metus, tempus in nisl eget, accumsan interdum dui. Pellentesque sollicitudin volutpat ullamcorper.'
        }
    );
};

const ContactUs = (req, res) => {
    res.render('ContactUs',
        {
            title: 'Contact Us'
        }
    );
};


module.exports = {
    about,
    ContactUs,
};