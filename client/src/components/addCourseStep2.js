function convertToBase64(file){
    return new Promise((resolve,reject)=>{
        try{
            const fileReader = new FileReader()
            
            fileReader.readAsDataURL(file)
            fileReader.onload=() => resolve(fileReader.result)
            fileReader.onerror=(err) => reject(err)
        }
        
        catch(err){
            console.log(err)
        }
    })
}

export const AddCourseStep2 = (props) => {
    const handleUploadFile = async (ev)=>{
        const base64= await convertToBase64(ev.target.files[0])
        if(base64.slice(5,10)==='image') props.setfile(base64)
        else props.setfile('https://th.bing.com/th/id/OIP.AC9frN1qFnn-I2JCycN8fwHaEK?w=307&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7')
    }
    return (
        <div>
            <div style={{ paddingLeft: '22%' }} class="col-lg-9 col-md-8 col-12">
                {/* <!-- Card --> */}
                <div class="card">
                    {/* <!-- Card header --> */}
                    <div class="card-header">
                        <h3 class="mb-0">Course Media</h3>
                        <p class="mb-0">A good thumbnail will make your course more catchy.</p>
                    </div>
                    {/* <!-- Card body --> */}
                    <div class="card-body">
                        <div>
                            <h4 class="mb-0">Choose an image</h4>
                            <p class="mb-4"></p>
                            {/* <!-- Form --> */}
                            <form class="row gx-3 needs-validation" novalidate="">
                                {/* <!-- First name --> */}
                                <div class="mb-3 col-12 col-md-6" style={{ width: '100%' }}>
                                    <label class="form-label" for="fname">Thumbnail</label>
                                    <div class="input-group mb-3">
                                        <input onChange={handleUploadFile} type="file" class="form-control" id="inputGroupFile02" />
                                    </div>
                                    <img width='100%' height='75%' src={props.file} class="rounded" alt="User avatar" />
                                </div>
                                <div class="col-12">
                                    {/* <!-- Button --> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}