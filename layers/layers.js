var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PIPE_1 = new ol.format.GeoJSON();
var features_PIPE_1 = format_PIPE_1.readFeatures(json_PIPE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PIPE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PIPE_1.addFeatures(features_PIPE_1);
var lyr_PIPE_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PIPE_1, 
                style: style_PIPE_1,
                popuplayertitle: "PIPE รังสิต",
                interactive: true,
                title: '<img src="styles/legend/PIPE_1.png" /> PIPE รังสิต'
            });
var format_PIPE_2 = new ol.format.GeoJSON();
var features_PIPE_2 = format_PIPE_2.readFeatures(json_PIPE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PIPE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PIPE_2.addFeatures(features_PIPE_2);
var lyr_PIPE_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PIPE_2, 
                style: style_PIPE_2,
                popuplayertitle: "PIPE ผักไห่",
                interactive: true,
                title: '<img src="styles/legend/PIPE_2.png" /> PIPE ผักไห่'
            });
var format_PIPE_3 = new ol.format.GeoJSON();
var features_PIPE_3 = format_PIPE_3.readFeatures(json_PIPE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PIPE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PIPE_3.addFeatures(features_PIPE_3);
var lyr_PIPE_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PIPE_3, 
                style: style_PIPE_3,
                popuplayertitle: "PIPE อ่างทอง",
                interactive: true,
                title: '<img src="styles/legend/PIPE_3.png" /> PIPE อ่างทอง'
            });
var format_PIPE_4 = new ol.format.GeoJSON();
var features_PIPE_4 = format_PIPE_4.readFeatures(json_PIPE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PIPE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PIPE_4.addFeatures(features_PIPE_4);
var lyr_PIPE_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PIPE_4, 
                style: style_PIPE_4,
                popuplayertitle: "PIPE ด่านขุนทด",
                interactive: true,
                title: '<img src="styles/legend/PIPE_4.png" /> PIPE ด่านขุนทด'
            });
var format_PIPE_5 = new ol.format.GeoJSON();
var features_PIPE_5 = format_PIPE_5.readFeatures(json_PIPE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PIPE_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PIPE_5.addFeatures(features_PIPE_5);
var lyr_PIPE_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PIPE_5, 
                style: style_PIPE_5,
                popuplayertitle: "PIPE สิงห์บุรี",
                interactive: true,
                title: '<img src="styles/legend/PIPE_5.png" /> PIPE สิงห์บุรี'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_PIPE_1.setVisible(true);lyr_PIPE_2.setVisible(true);lyr_PIPE_3.setVisible(true);lyr_PIPE_4.setVisible(true);lyr_PIPE_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PIPE_1,lyr_PIPE_2,lyr_PIPE_3,lyr_PIPE_4,lyr_PIPE_5];
lyr_PIPE_1.set('fieldAliases', {'PIPE_ID': 'PIPE_ID', 'PROJECT_NO': 'PROJECT_NO', 'OLD_PROJEC': 'OLD_PROJEC', 'CONTRAC_DA': 'CONTRAC_DA', 'CAP_DATE': 'CAP_DATE', 'ASSET_CODE': 'ASSET_CODE', 'PIPE_TYPE': 'PIPE_TYPE', 'GRADE': 'GRADE', 'PIPE_SIZE': 'PIPE_SIZE', 'CLASS': 'CLASS', 'PIPE_FUNC': 'PIPE_FUNC', 'LAYING': 'LAYING', 'PRODUCT': 'PRODUCT', 'DEPTH': 'DEPTH', 'PIPE_LONG': 'PIPE_LONG', 'YEARINSTAL': 'YEARINSTAL', 'LOCATE': 'LOCATE', 'PIPE_ID_PR': 'PIPE_ID_PR', 'PWA_CODE': 'PWA_CODE', 'REC_DATE': 'REC_DATE', 'PASSWORD': 'PASSWORD', 'REMARK': 'REMARK', 'Field23': 'Field23', });
lyr_PIPE_2.set('fieldAliases', {'PIPE_ID': 'PIPE_ID', 'PROJECT_NO': 'PROJECT_NO', 'OLD_PROJEC': 'OLD_PROJEC', 'CONTRAC_DA': 'CONTRAC_DA', 'CAP_DATE': 'CAP_DATE', 'ASSET_CODE': 'ASSET_CODE', 'PIPE_TYPE': 'PIPE_TYPE', 'GRADE': 'GRADE', 'PIPE_SIZE': 'PIPE_SIZE', 'CLASS': 'CLASS', 'PIPE_FUNC': 'PIPE_FUNC', 'LAYING': 'LAYING', 'PRODUCT': 'PRODUCT', 'DEPTH': 'DEPTH', 'PIPE_LONG': 'PIPE_LONG', 'YEARINSTAL': 'YEARINSTAL', 'LOCATE': 'LOCATE', 'PIPE_ID_PR': 'PIPE_ID_PR', 'PWA_CODE': 'PWA_CODE', 'REC_DATE': 'REC_DATE', 'PASSWORD': 'PASSWORD', 'REMARK': 'REMARK', });
lyr_PIPE_3.set('fieldAliases', {'PIPE_ID': 'PIPE_ID', 'PROJECT_NO': 'PROJECT_NO', 'OLD_PROJEC': 'OLD_PROJEC', 'CONTRAC_DA': 'CONTRAC_DA', 'CAP_DATE': 'CAP_DATE', 'ASSET_CODE': 'ASSET_CODE', 'PIPE_TYPE': 'PIPE_TYPE', 'GRADE': 'GRADE', 'PIPE_SIZE': 'PIPE_SIZE', 'CLASS': 'CLASS', 'PIPE_FUNC': 'PIPE_FUNC', 'LAYING': 'LAYING', 'PRODUCT': 'PRODUCT', 'DEPTH': 'DEPTH', 'PIPE_LONG': 'PIPE_LONG', 'YEARINSTAL': 'YEARINSTAL', 'LOCATE': 'LOCATE', 'PIPE_ID_PR': 'PIPE_ID_PR', 'PWA_CODE': 'PWA_CODE', 'REC_DATE': 'REC_DATE', 'PASSWORD': 'PASSWORD', 'REMARK': 'REMARK', });
lyr_PIPE_4.set('fieldAliases', {'PIPE_ID': 'PIPE_ID', 'PROJECT_NO': 'PROJECT_NO', 'OLD_PROJEC': 'OLD_PROJEC', 'CONTRAC_DA': 'CONTRAC_DA', 'CAP_DATE': 'CAP_DATE', 'ASSET_CODE': 'ASSET_CODE', 'PIPE_TYPE': 'PIPE_TYPE', 'GRADE': 'GRADE', 'PIPE_SIZE': 'PIPE_SIZE', 'CLASS': 'CLASS', 'PIPE_FUNC': 'PIPE_FUNC', 'LAYING': 'LAYING', 'PRODUCT': 'PRODUCT', 'DEPTH': 'DEPTH', 'PIPE_LONG': 'PIPE_LONG', 'YEARINSTAL': 'YEARINSTAL', 'LOCATE': 'LOCATE', 'PIPE_ID_PR': 'PIPE_ID_PR', 'PWA_CODE': 'PWA_CODE', 'REC_DATE': 'REC_DATE', 'PASSWORD': 'PASSWORD', 'REMARK': 'REMARK', });
lyr_PIPE_5.set('fieldAliases', {'PIPE_ID': 'PIPE_ID', 'PROJECT_NO': 'PROJECT_NO', 'OLD_PROJEC': 'OLD_PROJEC', 'CONTRAC_DA': 'CONTRAC_DA', 'CAP_DATE': 'CAP_DATE', 'ASSET_CODE': 'ASSET_CODE', 'PIPE_TYPE': 'PIPE_TYPE', 'GRADE': 'GRADE', 'PIPE_SIZE': 'PIPE_SIZE', 'CLASS': 'CLASS', 'PIPE_FUNC': 'PIPE_FUNC', 'LAYING': 'LAYING', 'PRODUCT': 'PRODUCT', 'DEPTH': 'DEPTH', 'PIPE_LONG': 'PIPE_LONG', 'YEARINSTAL': 'YEARINSTAL', 'LOCATE': 'LOCATE', 'PIPE_ID_PR': 'PIPE_ID_PR', 'PWA_CODE': 'PWA_CODE', 'REC_DATE': 'REC_DATE', 'PASSWORD': 'PASSWORD', 'REMARK': 'REMARK', });
lyr_PIPE_1.set('fieldImages', {'PIPE_ID': '', 'PROJECT_NO': '', 'OLD_PROJEC': '', 'CONTRAC_DA': '', 'CAP_DATE': '', 'ASSET_CODE': '', 'PIPE_TYPE': '', 'GRADE': '', 'PIPE_SIZE': '', 'CLASS': '', 'PIPE_FUNC': '', 'LAYING': '', 'PRODUCT': '', 'DEPTH': '', 'PIPE_LONG': '', 'YEARINSTAL': '', 'LOCATE': '', 'PIPE_ID_PR': '', 'PWA_CODE': '', 'REC_DATE': '', 'PASSWORD': '', 'REMARK': '', 'Field23': '', });
lyr_PIPE_2.set('fieldImages', {'PIPE_ID': '', 'PROJECT_NO': '', 'OLD_PROJEC': '', 'CONTRAC_DA': '', 'CAP_DATE': '', 'ASSET_CODE': '', 'PIPE_TYPE': '', 'GRADE': '', 'PIPE_SIZE': '', 'CLASS': '', 'PIPE_FUNC': '', 'LAYING': '', 'PRODUCT': '', 'DEPTH': '', 'PIPE_LONG': '', 'YEARINSTAL': '', 'LOCATE': '', 'PIPE_ID_PR': '', 'PWA_CODE': '', 'REC_DATE': '', 'PASSWORD': '', 'REMARK': '', });
lyr_PIPE_3.set('fieldImages', {'PIPE_ID': '', 'PROJECT_NO': '', 'OLD_PROJEC': '', 'CONTRAC_DA': '', 'CAP_DATE': '', 'ASSET_CODE': '', 'PIPE_TYPE': '', 'GRADE': '', 'PIPE_SIZE': '', 'CLASS': '', 'PIPE_FUNC': '', 'LAYING': '', 'PRODUCT': '', 'DEPTH': '', 'PIPE_LONG': '', 'YEARINSTAL': '', 'LOCATE': '', 'PIPE_ID_PR': '', 'PWA_CODE': '', 'REC_DATE': '', 'PASSWORD': '', 'REMARK': '', });
lyr_PIPE_4.set('fieldImages', {'PIPE_ID': '', 'PROJECT_NO': '', 'OLD_PROJEC': '', 'CONTRAC_DA': '', 'CAP_DATE': '', 'ASSET_CODE': '', 'PIPE_TYPE': '', 'GRADE': '', 'PIPE_SIZE': '', 'CLASS': '', 'PIPE_FUNC': '', 'LAYING': '', 'PRODUCT': '', 'DEPTH': '', 'PIPE_LONG': '', 'YEARINSTAL': '', 'LOCATE': '', 'PIPE_ID_PR': '', 'PWA_CODE': '', 'REC_DATE': '', 'PASSWORD': '', 'REMARK': '', });
lyr_PIPE_5.set('fieldImages', {'PIPE_ID': '', 'PROJECT_NO': '', 'OLD_PROJEC': '', 'CONTRAC_DA': '', 'CAP_DATE': '', 'ASSET_CODE': '', 'PIPE_TYPE': '', 'GRADE': '', 'PIPE_SIZE': '', 'CLASS': '', 'PIPE_FUNC': '', 'LAYING': '', 'PRODUCT': '', 'DEPTH': '', 'PIPE_LONG': '', 'YEARINSTAL': '', 'LOCATE': '', 'PIPE_ID_PR': '', 'PWA_CODE': '', 'REC_DATE': '', 'PASSWORD': '', 'REMARK': '', });
lyr_PIPE_1.set('fieldLabels', {'PIPE_ID': 'no label', 'PROJECT_NO': 'no label', 'OLD_PROJEC': 'no label', 'CONTRAC_DA': 'no label', 'CAP_DATE': 'no label', 'ASSET_CODE': 'no label', 'PIPE_TYPE': 'no label', 'GRADE': 'no label', 'PIPE_SIZE': 'no label', 'CLASS': 'no label', 'PIPE_FUNC': 'no label', 'LAYING': 'no label', 'PRODUCT': 'no label', 'DEPTH': 'no label', 'PIPE_LONG': 'no label', 'YEARINSTAL': 'no label', 'LOCATE': 'no label', 'PIPE_ID_PR': 'no label', 'PWA_CODE': 'no label', 'REC_DATE': 'no label', 'PASSWORD': 'no label', 'REMARK': 'no label', 'Field23': 'no label', });
lyr_PIPE_2.set('fieldLabels', {'PIPE_ID': 'no label', 'PROJECT_NO': 'no label', 'OLD_PROJEC': 'no label', 'CONTRAC_DA': 'no label', 'CAP_DATE': 'no label', 'ASSET_CODE': 'no label', 'PIPE_TYPE': 'no label', 'GRADE': 'no label', 'PIPE_SIZE': 'no label', 'CLASS': 'no label', 'PIPE_FUNC': 'no label', 'LAYING': 'no label', 'PRODUCT': 'no label', 'DEPTH': 'no label', 'PIPE_LONG': 'no label', 'YEARINSTAL': 'no label', 'LOCATE': 'no label', 'PIPE_ID_PR': 'no label', 'PWA_CODE': 'no label', 'REC_DATE': 'no label', 'PASSWORD': 'no label', 'REMARK': 'no label', });
lyr_PIPE_3.set('fieldLabels', {'PIPE_ID': 'no label', 'PROJECT_NO': 'no label', 'OLD_PROJEC': 'no label', 'CONTRAC_DA': 'no label', 'CAP_DATE': 'no label', 'ASSET_CODE': 'no label', 'PIPE_TYPE': 'no label', 'GRADE': 'no label', 'PIPE_SIZE': 'no label', 'CLASS': 'no label', 'PIPE_FUNC': 'no label', 'LAYING': 'no label', 'PRODUCT': 'no label', 'DEPTH': 'no label', 'PIPE_LONG': 'no label', 'YEARINSTAL': 'no label', 'LOCATE': 'no label', 'PIPE_ID_PR': 'no label', 'PWA_CODE': 'no label', 'REC_DATE': 'no label', 'PASSWORD': 'no label', 'REMARK': 'no label', });
lyr_PIPE_4.set('fieldLabels', {'PIPE_ID': 'no label', 'PROJECT_NO': 'no label', 'OLD_PROJEC': 'no label', 'CONTRAC_DA': 'no label', 'CAP_DATE': 'no label', 'ASSET_CODE': 'no label', 'PIPE_TYPE': 'no label', 'GRADE': 'no label', 'PIPE_SIZE': 'no label', 'CLASS': 'no label', 'PIPE_FUNC': 'no label', 'LAYING': 'no label', 'PRODUCT': 'no label', 'DEPTH': 'no label', 'PIPE_LONG': 'no label', 'YEARINSTAL': 'no label', 'LOCATE': 'no label', 'PIPE_ID_PR': 'no label', 'PWA_CODE': 'no label', 'REC_DATE': 'no label', 'PASSWORD': 'no label', 'REMARK': 'no label', });
lyr_PIPE_5.set('fieldLabels', {'PIPE_ID': 'hidden field', 'PROJECT_NO': 'hidden field', 'OLD_PROJEC': 'hidden field', 'CONTRAC_DA': 'hidden field', 'CAP_DATE': 'hidden field', 'ASSET_CODE': 'hidden field', 'PIPE_TYPE': 'no label', 'GRADE': 'hidden field', 'PIPE_SIZE': 'no label', 'CLASS': 'hidden field', 'PIPE_FUNC': 'hidden field', 'LAYING': 'hidden field', 'PRODUCT': 'hidden field', 'DEPTH': 'hidden field', 'PIPE_LONG': 'hidden field', 'YEARINSTAL': 'no label', 'LOCATE': 'hidden field', 'PIPE_ID_PR': 'hidden field', 'PWA_CODE': 'no label', 'REC_DATE': 'no label', 'PASSWORD': 'hidden field', 'REMARK': 'hidden field', });
lyr_PIPE_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});