import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import UploadForm from '../../components/atoms/UploadForm';
import withLayout from '../../components/HOC/withLayout'



function Upload() {

 



    return (
        <UploadForm />
    )
}


export default withLayout(Upload)