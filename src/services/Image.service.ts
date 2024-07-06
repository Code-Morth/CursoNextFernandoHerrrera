export const getImagenById =  (id:string | number ) => {
  try {
    const response: any =  fetch(`https://api.pexels.com/v1/photos/${id}`, {
      method: 'GET',
      headers: {
        Authorization:
          'nUqGgPCMunOvtgll1VwBjfznt9BVG1CcyDKaLhp2SEtx0maVYMMvQtLP'
          
      }
    }).then((response) => response.json())

    return response
  } catch (error) {
    return error
  }
}
