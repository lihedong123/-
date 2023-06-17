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
