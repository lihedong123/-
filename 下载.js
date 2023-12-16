toolApi
  .toolDownload({
    urlKey: item.fileUrlKey,
    catId: item.categoryId,
  })
  .then((res) => {
    let blob = new Blob([res], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8",
    });
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = item.fileName;
    a.click();
    URL.revokeObjectURL(a.href);
    a.remove();
  });


toolDownload: (param) => request.get(`${apiUrl}/tool/download?urlKey=${param.urlKey}&catId=${param.catId}`, { responseType: "blob" }) // 文件下载






/**
 * 给一个二进制文件流导出(下载)一个文件
 * 
 * let projectId = getURLhandler(route.path).projectId;
    let projectTypeId = getURLhandler(route.path).projectTypeId;
 * @param res 二进制文件流
 * @param name 导出(下载)的文件名称
 * @param fileType 导出(下载)的文件格式
 * @param blobType 二进制文件流的格式
 */
export const exportFile = (res, name, fileType = 'xlsx', blobType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8') => {
  let blob = new Blob([res], {
    type: blobType,
  });
  let objectUrl = URL.createObjectURL(blob);
  let a = document.createElement("a");
  a.href = objectUrl;
  a.download = `${name}.${fileType}`;
  a.click();
  URL.revokeObjectURL(a.href)
  a.remove()
}




//获取url参数(非hash模式)
export const getURLhandler = (url = '/constructionProjectManage/project_mt/components/projectInfo/type=1&id=1') => {
  let list = url.split('/')
  let strs = list[list.length - 1].split('&');
  // console.log(strs);
  let obj = {}
  strs.map(item => {
    let arr = item.split('=')
    obj[arr[0]] = arr[1]
  })
  return obj
}
