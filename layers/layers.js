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
                interactive: false,
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
                interactive: false,
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
                popuplayertitle: "PIPE วิเศษชัยชาญ",
                interactive: false,
                title: '<img src="styles/legend/PIPE_3.png" /> PIPE วิเศษชัยชาญ'
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
                popuplayertitle: "PIPE อ่างทอง",
                interactive: false,
                title: '<img src="styles/legend/PIPE_4.png" /> PIPE อ่างทอง'
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
                popuplayertitle: "PIPE ด่านขุนทด",
                interactive: false,
                title: '<img src="styles/legend/PIPE_5.png" /> PIPE ด่านขุนทด'
            });
var format_PIPE_6 = new ol.format.GeoJSON();
var features_PIPE_6 = format_PIPE_6.readFeatures(json_PIPE_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PIPE_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PIPE_6.addFeatures(features_PIPE_6);
var lyr_PIPE_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PIPE_6, 
                style: style_PIPE_6,
                popuplayertitle: "PIPE สิงห์บุรี",
                interactive: false,
                title: '<img src="styles/legend/PIPE_6.png" /> PIPE สิงห์บุรี'
            });
var format_PIPE_7 = new ol.format.GeoJSON();
var features_PIPE_7 = format_PIPE_7.readFeatures(json_PIPE_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PIPE_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PIPE_7.addFeatures(features_PIPE_7);
var lyr_PIPE_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PIPE_7, 
                style: style_PIPE_7,
                popuplayertitle: "PIPE ชัยบาดาล",
                interactive: false,
                title: '<img src="styles/legend/PIPE_7.png" /> PIPE ชัยบาดาล'
            });
var format_PIPE_8 = new ol.format.GeoJSON();
var features_PIPE_8 = format_PIPE_8.readFeatures(json_PIPE_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PIPE_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PIPE_8.addFeatures(features_PIPE_8);
var lyr_PIPE_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PIPE_8, 
                style: style_PIPE_8,
                popuplayertitle: "PIPE บ้านหมี่",
                interactive: false,
                title: '<img src="styles/legend/PIPE_8.png" /> PIPE บ้านหมี่'
            });
var format_PIPE_9 = new ol.format.GeoJSON();
var features_PIPE_9 = format_PIPE_9.readFeatures(json_PIPE_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PIPE_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PIPE_9.addFeatures(features_PIPE_9);
var lyr_PIPE_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PIPE_9, 
                style: style_PIPE_9,
                popuplayertitle: "PIPE ลพบุรี",
                interactive: false,
                title: '<img src="styles/legend/PIPE_9.png" /> PIPE ลพบุรี'
            });
var format_PIPE_10 = new ol.format.GeoJSON();
var features_PIPE_10 = format_PIPE_10.readFeatures(json_PIPE_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PIPE_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PIPE_10.addFeatures(features_PIPE_10);
var lyr_PIPE_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PIPE_10, 
                style: style_PIPE_10,
                popuplayertitle: "PIPE บ้านหมอ",
                interactive: false,
                title: '<img src="styles/legend/PIPE_10.png" /> PIPE บ้านหมอ'
            });
var format_PIPE_11 = new ol.format.GeoJSON();
var features_PIPE_11 = format_PIPE_11.readFeatures(json_PIPE_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PIPE_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PIPE_11.addFeatures(features_PIPE_11);
var lyr_PIPE_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PIPE_11, 
                style: style_PIPE_11,
                popuplayertitle: "PIPE มวกเหล็ก",
                interactive: false,
                title: '<img src="styles/legend/PIPE_11.png" /> PIPE มวกเหล็ก'
            });
var format_PIPE_12 = new ol.format.GeoJSON();
var features_PIPE_12 = format_PIPE_12.readFeatures(json_PIPE_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PIPE_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PIPE_12.addFeatures(features_PIPE_12);
var lyr_PIPE_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PIPE_12, 
                style: style_PIPE_12,
                popuplayertitle: "PIPE หนองแค",
                interactive: false,
                title: '<img src="styles/legend/PIPE_12.png" /> PIPE หนองแค'
            });
var format_PIPE_13 = new ol.format.GeoJSON();
var features_PIPE_13 = format_PIPE_13.readFeatures(json_PIPE_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PIPE_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PIPE_13.addFeatures(features_PIPE_13);
var lyr_PIPE_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PIPE_13, 
                style: style_PIPE_13,
                popuplayertitle: "PIPE พระพุทธบาท",
                interactive: false,
                title: '<img src="styles/legend/PIPE_13.png" /> PIPE พระพุทธบาท'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_PIPE_1.setVisible(true);lyr_PIPE_2.setVisible(true);lyr_PIPE_3.setVisible(true);lyr_PIPE_4.setVisible(true);lyr_PIPE_5.setVisible(true);lyr_PIPE_6.setVisible(true);lyr_PIPE_7.setVisible(true);lyr_PIPE_8.setVisible(true);lyr_PIPE_9.setVisible(true);lyr_PIPE_10.setVisible(true);lyr_PIPE_11.setVisible(true);lyr_PIPE_12.setVisible(true);lyr_PIPE_13.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PIPE_1,lyr_PIPE_2,lyr_PIPE_3,lyr_PIPE_4,lyr_PIPE_5,lyr_PIPE_6,lyr_PIPE_7,lyr_PIPE_8,lyr_PIPE_9,lyr_PIPE_10,lyr_PIPE_11,lyr_PIPE_12,lyr_PIPE_13];
lyr_PIPE_1.set('fieldAliases', {'PIPE_ID': 'PIPE_ID', 'PROJECT_NO': 'PROJECT_NO', 'OLD_PROJEC': 'OLD_PROJEC', 'CONTRAC_DA': 'CONTRAC_DA', 'CAP_DATE': 'CAP_DATE', 'ASSET_CODE': 'ASSET_CODE', 'PIPE_TYPE': 'PIPE_TYPE', 'GRADE': 'GRADE', 'PIPE_SIZE': 'PIPE_SIZE', 'CLASS': 'CLASS', 'PIPE_FUNC': 'PIPE_FUNC', 'LAYING': 'LAYING', 'PRODUCT': 'PRODUCT', 'DEPTH': 'DEPTH', 'PIPE_LONG': 'PIPE_LONG', 'YEARINSTAL': 'YEARINSTAL', 'LOCATE': 'LOCATE', 'PIPE_ID_PR': 'PIPE_ID_PR', 'PWA_CODE': 'PWA_CODE', 'REC_DATE': 'REC_DATE', 'PASSWORD': 'PASSWORD', 'REMARK': 'REMARK', 'Field23': 'Field23', });
lyr_PIPE_2.set('fieldAliases', {'PIPE_ID': 'PIPE_ID', 'PROJECT_NO': 'PROJECT_NO', 'OLD_PROJEC': 'OLD_PROJEC', 'CONTRAC_DA': 'CONTRAC_DA', 'CAP_DATE': 'CAP_DATE', 'ASSET_CODE': 'ASSET_CODE', 'PIPE_TYPE': 'PIPE_TYPE', 'GRADE': 'GRADE', 'PIPE_SIZE': 'PIPE_SIZE', 'CLASS': 'CLASS', 'PIPE_FUNC': 'PIPE_FUNC', 'LAYING': 'LAYING', 'PRODUCT': 'PRODUCT', 'DEPTH': 'DEPTH', 'PIPE_LONG': 'PIPE_LONG', 'YEARINSTAL': 'YEARINSTAL', 'LOCATE': 'LOCATE', 'PIPE_ID_PR': 'PIPE_ID_PR', 'PWA_CODE': 'PWA_CODE', 'REC_DATE': 'REC_DATE', 'PASSWORD': 'PASSWORD', 'REMARK': 'REMARK', });
lyr_PIPE_3.set('fieldAliases', {'PIPE_ID': 'PIPE_ID', 'PROJECT_NO': 'PROJECT_NO', 'OLD_PROJEC': 'OLD_PROJEC', 'CONTRAC_DA': 'CONTRAC_DA', 'CAP_DATE': 'CAP_DATE', 'ASSET_CODE': 'ASSET_CODE', 'PIPE_TYPE': 'PIPE_TYPE', 'GRADE': 'GRADE', 'PIPE_SIZE': 'PIPE_SIZE', 'CLASS': 'CLASS', 'PIPE_FUNC': 'PIPE_FUNC', 'LAYING': 'LAYING', 'PRODUCT': 'PRODUCT', 'DEPTH': 'DEPTH', 'PIPE_LONG': 'PIPE_LONG', 'YEARINSTAL': 'YEARINSTAL', 'LOCATE': 'LOCATE', 'PIPE_ID_PR': 'PIPE_ID_PR', 'PWA_CODE': 'PWA_CODE', 'REC_DATE': 'REC_DATE', 'PASSWORD': 'PASSWORD', 'REMARK': 'REMARK', });
lyr_PIPE_4.set('fieldAliases', {'PIPE_ID': 'PIPE_ID', 'PROJECT_NO': 'PROJECT_NO', 'OLD_PROJEC': 'OLD_PROJEC', 'CONTRAC_DA': 'CONTRAC_DA', 'CAP_DATE': 'CAP_DATE', 'ASSET_CODE': 'ASSET_CODE', 'PIPE_TYPE': 'PIPE_TYPE', 'GRADE': 'GRADE', 'PIPE_SIZE': 'PIPE_SIZE', 'CLASS': 'CLASS', 'PIPE_FUNC': 'PIPE_FUNC', 'LAYING': 'LAYING', 'PRODUCT': 'PRODUCT', 'DEPTH': 'DEPTH', 'PIPE_LONG': 'PIPE_LONG', 'YEARINSTAL': 'YEARINSTAL', 'LOCATE': 'LOCATE', 'PIPE_ID_PR': 'PIPE_ID_PR', 'PWA_CODE': 'PWA_CODE', 'REC_DATE': 'REC_DATE', 'PASSWORD': 'PASSWORD', 'REMARK': 'REMARK', });
lyr_PIPE_5.set('fieldAliases', {'PIPE_ID': 'PIPE_ID', 'PROJECT_NO': 'PROJECT_NO', 'OLD_PROJEC': 'OLD_PROJEC', 'CONTRAC_DA': 'CONTRAC_DA', 'CAP_DATE': 'CAP_DATE', 'ASSET_CODE': 'ASSET_CODE', 'PIPE_TYPE': 'PIPE_TYPE', 'GRADE': 'GRADE', 'PIPE_SIZE': 'PIPE_SIZE', 'CLASS': 'CLASS', 'PIPE_FUNC': 'PIPE_FUNC', 'LAYING': 'LAYING', 'PRODUCT': 'PRODUCT', 'DEPTH': 'DEPTH', 'PIPE_LONG': 'PIPE_LONG', 'YEARINSTAL': 'YEARINSTAL', 'LOCATE': 'LOCATE', 'PIPE_ID_PR': 'PIPE_ID_PR', 'PWA_CODE': 'PWA_CODE', 'REC_DATE': 'REC_DATE', 'PASSWORD': 'PASSWORD', 'REMARK': 'REMARK', });
lyr_PIPE_6.set('fieldAliases', {'PIPE_ID': 'PIPE_ID', 'PROJECT_NO': 'PROJECT_NO', 'OLD_PROJEC': 'OLD_PROJEC', 'CONTRAC_DA': 'CONTRAC_DA', 'CAP_DATE': 'CAP_DATE', 'ASSET_CODE': 'ASSET_CODE', 'PIPE_TYPE': 'PIPE_TYPE', 'GRADE': 'GRADE', 'PIPE_SIZE': 'PIPE_SIZE', 'CLASS': 'CLASS', 'PIPE_FUNC': 'PIPE_FUNC', 'LAYING': 'LAYING', 'PRODUCT': 'PRODUCT', 'DEPTH': 'DEPTH', 'PIPE_LONG': 'PIPE_LONG', 'YEARINSTAL': 'YEARINSTAL', 'LOCATE': 'LOCATE', 'PIPE_ID_PR': 'PIPE_ID_PR', 'PWA_CODE': 'PWA_CODE', 'REC_DATE': 'REC_DATE', 'PASSWORD': 'PASSWORD', 'REMARK': 'REMARK', });
lyr_PIPE_7.set('fieldAliases', {'PIPE_ID': 'PIPE_ID', 'PROJECT_NO': 'PROJECT_NO', 'OLD_PROJEC': 'OLD_PROJEC', 'CONTRAC_DA': 'CONTRAC_DA', 'CAP_DATE': 'CAP_DATE', 'ASSET_CODE': 'ASSET_CODE', 'PIPE_TYPE': 'PIPE_TYPE', 'GRADE': 'GRADE', 'PIPE_SIZE': 'PIPE_SIZE', 'CLASS': 'CLASS', 'PIPE_FUNC': 'PIPE_FUNC', 'LAYING': 'LAYING', 'PRODUCT': 'PRODUCT', 'DEPTH': 'DEPTH', 'PIPE_LONG': 'PIPE_LONG', 'YEARINSTAL': 'YEARINSTAL', 'LOCATE': 'LOCATE', 'PIPE_ID_PR': 'PIPE_ID_PR', 'PWA_CODE': 'PWA_CODE', 'REC_DATE': 'REC_DATE', 'PASSWORD': 'PASSWORD', 'REMARK': 'REMARK', });
lyr_PIPE_8.set('fieldAliases', {'PIPE_ID': 'PIPE_ID', 'PROJECT_NO': 'PROJECT_NO', 'OLD_PROJEC': 'OLD_PROJEC', 'CONTRAC_DA': 'CONTRAC_DA', 'CAP_DATE': 'CAP_DATE', 'ASSET_CODE': 'ASSET_CODE', 'PIPE_TYPE': 'PIPE_TYPE', 'GRADE': 'GRADE', 'PIPE_SIZE': 'PIPE_SIZE', 'CLASS': 'CLASS', 'PIPE_FUNC': 'PIPE_FUNC', 'LAYING': 'LAYING', 'PRODUCT': 'PRODUCT', 'DEPTH': 'DEPTH', 'PIPE_LONG': 'PIPE_LONG', 'YEARINSTAL': 'YEARINSTAL', 'LOCATE': 'LOCATE', 'PIPE_ID_PR': 'PIPE_ID_PR', 'PWA_CODE': 'PWA_CODE', 'REC_DATE': 'REC_DATE', 'PASSWORD': 'PASSWORD', 'REMARK': 'REMARK', });
lyr_PIPE_9.set('fieldAliases', {'PIPE_ID': 'PIPE_ID', 'PROJECT_NO': 'PROJECT_NO', 'OLD_PROJEC': 'OLD_PROJEC', 'CONTRAC_DA': 'CONTRAC_DA', 'CAP_DATE': 'CAP_DATE', 'ASSET_CODE': 'ASSET_CODE', 'PIPE_TYPE': 'PIPE_TYPE', 'GRADE': 'GRADE', 'PIPE_SIZE': 'PIPE_SIZE', 'CLASS': 'CLASS', 'PIPE_FUNC': 'PIPE_FUNC', 'LAYING': 'LAYING', 'PRODUCT': 'PRODUCT', 'DEPTH': 'DEPTH', 'PIPE_LONG': 'PIPE_LONG', 'YEARINSTAL': 'YEARINSTAL', 'LOCATE': 'LOCATE', 'PIPE_ID_PR': 'PIPE_ID_PR', 'PWA_CODE': 'PWA_CODE', 'REC_DATE': 'REC_DATE', 'PASSWORD': 'PASSWORD', 'REMARK': 'REMARK', });
lyr_PIPE_10.set('fieldAliases', {'PIPE_ID': 'PIPE_ID', 'PROJECT_NO': 'PROJECT_NO', 'OLD_PROJEC': 'OLD_PROJEC', 'CONTRAC_DA': 'CONTRAC_DA', 'CAP_DATE': 'CAP_DATE', 'ASSET_CODE': 'ASSET_CODE', 'PIPE_TYPE': 'PIPE_TYPE', 'GRADE': 'GRADE', 'PIPE_SIZE': 'PIPE_SIZE', 'CLASS': 'CLASS', 'PIPE_FUNC': 'PIPE_FUNC', 'LAYING': 'LAYING', 'PRODUCT': 'PRODUCT', 'DEPTH': 'DEPTH', 'PIPE_LONG': 'PIPE_LONG', 'YEARINSTAL': 'YEARINSTAL', 'LOCATE': 'LOCATE', 'PIPE_ID_PR': 'PIPE_ID_PR', 'PWA_CODE': 'PWA_CODE', 'REC_DATE': 'REC_DATE', 'PASSWORD': 'PASSWORD', 'REMARK': 'REMARK', });
lyr_PIPE_11.set('fieldAliases', {'PIPE_ID': 'PIPE_ID', 'PROJECT_NO': 'PROJECT_NO', 'OLD_PROJEC': 'OLD_PROJEC', 'CONTRAC_DA': 'CONTRAC_DA', 'CAP_DATE': 'CAP_DATE', 'ASSET_CODE': 'ASSET_CODE', 'PIPE_TYPE': 'PIPE_TYPE', 'GRADE': 'GRADE', 'PIPE_SIZE': 'PIPE_SIZE', 'CLASS': 'CLASS', 'PIPE_FUNC': 'PIPE_FUNC', 'LAYING': 'LAYING', 'PRODUCT': 'PRODUCT', 'DEPTH': 'DEPTH', 'PIPE_LONG': 'PIPE_LONG', 'YEARINSTAL': 'YEARINSTAL', 'LOCATE': 'LOCATE', 'PIPE_ID_PR': 'PIPE_ID_PR', 'PWA_CODE': 'PWA_CODE', 'REC_DATE': 'REC_DATE', 'PASSWORD': 'PASSWORD', 'REMARK': 'REMARK', });
lyr_PIPE_12.set('fieldAliases', {'PIPE_ID': 'PIPE_ID', 'PROJECT_NO': 'PROJECT_NO', 'OLD_PROJEC': 'OLD_PROJEC', 'CONTRAC_DA': 'CONTRAC_DA', 'CAP_DATE': 'CAP_DATE', 'ASSET_CODE': 'ASSET_CODE', 'PIPE_TYPE': 'PIPE_TYPE', 'GRADE': 'GRADE', 'PIPE_SIZE': 'PIPE_SIZE', 'CLASS': 'CLASS', 'PIPE_FUNC': 'PIPE_FUNC', 'LAYING': 'LAYING', 'PRODUCT': 'PRODUCT', 'DEPTH': 'DEPTH', 'PIPE_LONG': 'PIPE_LONG', 'YEARINSTAL': 'YEARINSTAL', 'LOCATE': 'LOCATE', 'PIPE_ID_PR': 'PIPE_ID_PR', 'PWA_CODE': 'PWA_CODE', 'REC_DATE': 'REC_DATE', 'PASSWORD': 'PASSWORD', 'REMARK': 'REMARK', });
lyr_PIPE_13.set('fieldAliases', {'PIPE_ID': 'PIPE_ID', 'PROJECT_NO': 'PROJECT_NO', 'OLD_PROJEC': 'OLD_PROJEC', 'CONTRAC_DA': 'CONTRAC_DA', 'CAP_DATE': 'CAP_DATE', 'ASSET_CODE': 'ASSET_CODE', 'PIPE_TYPE': 'PIPE_TYPE', 'GRADE': 'GRADE', 'PIPE_SIZE': 'PIPE_SIZE', 'CLASS': 'CLASS', 'PIPE_FUNC': 'PIPE_FUNC', 'LAYING': 'LAYING', 'PRODUCT': 'PRODUCT', 'DEPTH': 'DEPTH', 'PIPE_LONG': 'PIPE_LONG', 'YEARINSTAL': 'YEARINSTAL', 'LOCATE': 'LOCATE', 'PIPE_ID_PR': 'PIPE_ID_PR', 'PWA_CODE': 'PWA_CODE', 'REC_DATE': 'REC_DATE', 'PASSWORD': 'PASSWORD', 'REMARK': 'REMARK', });
lyr_PIPE_1.set('fieldImages', {'PIPE_ID': 'TextEdit', 'PROJECT_NO': 'TextEdit', 'OLD_PROJEC': 'TextEdit', 'CONTRAC_DA': 'TextEdit', 'CAP_DATE': 'TextEdit', 'ASSET_CODE': 'TextEdit', 'PIPE_TYPE': 'TextEdit', 'GRADE': 'TextEdit', 'PIPE_SIZE': 'TextEdit', 'CLASS': 'TextEdit', 'PIPE_FUNC': 'TextEdit', 'LAYING': 'TextEdit', 'PRODUCT': 'TextEdit', 'DEPTH': 'TextEdit', 'PIPE_LONG': 'TextEdit', 'YEARINSTAL': 'TextEdit', 'LOCATE': 'TextEdit', 'PIPE_ID_PR': 'TextEdit', 'PWA_CODE': 'TextEdit', 'REC_DATE': 'TextEdit', 'PASSWORD': 'TextEdit', 'REMARK': 'TextEdit', 'Field23': 'TextEdit', });
lyr_PIPE_2.set('fieldImages', {'PIPE_ID': 'TextEdit', 'PROJECT_NO': 'TextEdit', 'OLD_PROJEC': 'TextEdit', 'CONTRAC_DA': 'TextEdit', 'CAP_DATE': 'TextEdit', 'ASSET_CODE': 'TextEdit', 'PIPE_TYPE': 'TextEdit', 'GRADE': 'TextEdit', 'PIPE_SIZE': 'TextEdit', 'CLASS': 'TextEdit', 'PIPE_FUNC': 'TextEdit', 'LAYING': 'TextEdit', 'PRODUCT': 'TextEdit', 'DEPTH': 'TextEdit', 'PIPE_LONG': 'TextEdit', 'YEARINSTAL': 'TextEdit', 'LOCATE': 'TextEdit', 'PIPE_ID_PR': 'TextEdit', 'PWA_CODE': 'TextEdit', 'REC_DATE': 'TextEdit', 'PASSWORD': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_PIPE_3.set('fieldImages', {'PIPE_ID': '', 'PROJECT_NO': '', 'OLD_PROJEC': '', 'CONTRAC_DA': '', 'CAP_DATE': '', 'ASSET_CODE': '', 'PIPE_TYPE': '', 'GRADE': '', 'PIPE_SIZE': '', 'CLASS': '', 'PIPE_FUNC': '', 'LAYING': '', 'PRODUCT': '', 'DEPTH': '', 'PIPE_LONG': '', 'YEARINSTAL': '', 'LOCATE': '', 'PIPE_ID_PR': '', 'PWA_CODE': '', 'REC_DATE': '', 'PASSWORD': '', 'REMARK': '', });
lyr_PIPE_4.set('fieldImages', {'PIPE_ID': 'TextEdit', 'PROJECT_NO': 'TextEdit', 'OLD_PROJEC': 'TextEdit', 'CONTRAC_DA': 'TextEdit', 'CAP_DATE': 'TextEdit', 'ASSET_CODE': 'TextEdit', 'PIPE_TYPE': 'TextEdit', 'GRADE': 'TextEdit', 'PIPE_SIZE': 'TextEdit', 'CLASS': 'TextEdit', 'PIPE_FUNC': 'TextEdit', 'LAYING': 'TextEdit', 'PRODUCT': 'TextEdit', 'DEPTH': 'TextEdit', 'PIPE_LONG': 'TextEdit', 'YEARINSTAL': 'TextEdit', 'LOCATE': 'TextEdit', 'PIPE_ID_PR': 'TextEdit', 'PWA_CODE': 'TextEdit', 'REC_DATE': 'TextEdit', 'PASSWORD': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_PIPE_5.set('fieldImages', {'PIPE_ID': 'TextEdit', 'PROJECT_NO': 'TextEdit', 'OLD_PROJEC': 'TextEdit', 'CONTRAC_DA': 'TextEdit', 'CAP_DATE': 'TextEdit', 'ASSET_CODE': 'TextEdit', 'PIPE_TYPE': 'TextEdit', 'GRADE': 'TextEdit', 'PIPE_SIZE': 'TextEdit', 'CLASS': 'TextEdit', 'PIPE_FUNC': 'TextEdit', 'LAYING': 'TextEdit', 'PRODUCT': 'TextEdit', 'DEPTH': 'TextEdit', 'PIPE_LONG': 'TextEdit', 'YEARINSTAL': 'TextEdit', 'LOCATE': 'TextEdit', 'PIPE_ID_PR': 'TextEdit', 'PWA_CODE': 'TextEdit', 'REC_DATE': 'TextEdit', 'PASSWORD': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_PIPE_6.set('fieldImages', {'PIPE_ID': '', 'PROJECT_NO': '', 'OLD_PROJEC': '', 'CONTRAC_DA': '', 'CAP_DATE': '', 'ASSET_CODE': '', 'PIPE_TYPE': '', 'GRADE': '', 'PIPE_SIZE': '', 'CLASS': '', 'PIPE_FUNC': '', 'LAYING': '', 'PRODUCT': '', 'DEPTH': '', 'PIPE_LONG': '', 'YEARINSTAL': '', 'LOCATE': '', 'PIPE_ID_PR': '', 'PWA_CODE': '', 'REC_DATE': '', 'PASSWORD': '', 'REMARK': '', });
lyr_PIPE_7.set('fieldImages', {'PIPE_ID': '', 'PROJECT_NO': '', 'OLD_PROJEC': '', 'CONTRAC_DA': '', 'CAP_DATE': '', 'ASSET_CODE': '', 'PIPE_TYPE': '', 'GRADE': '', 'PIPE_SIZE': '', 'CLASS': '', 'PIPE_FUNC': '', 'LAYING': '', 'PRODUCT': '', 'DEPTH': '', 'PIPE_LONG': '', 'YEARINSTAL': '', 'LOCATE': '', 'PIPE_ID_PR': '', 'PWA_CODE': '', 'REC_DATE': '', 'PASSWORD': '', 'REMARK': '', });
lyr_PIPE_8.set('fieldImages', {'PIPE_ID': '', 'PROJECT_NO': '', 'OLD_PROJEC': '', 'CONTRAC_DA': '', 'CAP_DATE': '', 'ASSET_CODE': '', 'PIPE_TYPE': '', 'GRADE': '', 'PIPE_SIZE': '', 'CLASS': '', 'PIPE_FUNC': '', 'LAYING': '', 'PRODUCT': '', 'DEPTH': '', 'PIPE_LONG': '', 'YEARINSTAL': '', 'LOCATE': '', 'PIPE_ID_PR': '', 'PWA_CODE': '', 'REC_DATE': '', 'PASSWORD': '', 'REMARK': '', });
lyr_PIPE_9.set('fieldImages', {'PIPE_ID': 'TextEdit', 'PROJECT_NO': 'TextEdit', 'OLD_PROJEC': 'TextEdit', 'CONTRAC_DA': 'TextEdit', 'CAP_DATE': 'TextEdit', 'ASSET_CODE': 'TextEdit', 'PIPE_TYPE': 'TextEdit', 'GRADE': 'TextEdit', 'PIPE_SIZE': 'TextEdit', 'CLASS': 'TextEdit', 'PIPE_FUNC': 'TextEdit', 'LAYING': 'TextEdit', 'PRODUCT': 'TextEdit', 'DEPTH': 'TextEdit', 'PIPE_LONG': 'TextEdit', 'YEARINSTAL': 'TextEdit', 'LOCATE': 'TextEdit', 'PIPE_ID_PR': 'TextEdit', 'PWA_CODE': 'TextEdit', 'REC_DATE': 'TextEdit', 'PASSWORD': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_PIPE_10.set('fieldImages', {'PIPE_ID': 'TextEdit', 'PROJECT_NO': 'TextEdit', 'OLD_PROJEC': 'TextEdit', 'CONTRAC_DA': 'TextEdit', 'CAP_DATE': 'TextEdit', 'ASSET_CODE': 'TextEdit', 'PIPE_TYPE': 'TextEdit', 'GRADE': 'TextEdit', 'PIPE_SIZE': 'TextEdit', 'CLASS': 'TextEdit', 'PIPE_FUNC': 'TextEdit', 'LAYING': 'TextEdit', 'PRODUCT': 'TextEdit', 'DEPTH': 'TextEdit', 'PIPE_LONG': 'TextEdit', 'YEARINSTAL': 'TextEdit', 'LOCATE': 'TextEdit', 'PIPE_ID_PR': 'TextEdit', 'PWA_CODE': 'TextEdit', 'REC_DATE': 'TextEdit', 'PASSWORD': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_PIPE_11.set('fieldImages', {'PIPE_ID': 'TextEdit', 'PROJECT_NO': 'TextEdit', 'OLD_PROJEC': 'TextEdit', 'CONTRAC_DA': 'TextEdit', 'CAP_DATE': 'TextEdit', 'ASSET_CODE': 'TextEdit', 'PIPE_TYPE': 'TextEdit', 'GRADE': 'TextEdit', 'PIPE_SIZE': 'TextEdit', 'CLASS': 'TextEdit', 'PIPE_FUNC': 'TextEdit', 'LAYING': 'TextEdit', 'PRODUCT': 'TextEdit', 'DEPTH': 'TextEdit', 'PIPE_LONG': 'TextEdit', 'YEARINSTAL': 'TextEdit', 'LOCATE': 'TextEdit', 'PIPE_ID_PR': 'TextEdit', 'PWA_CODE': 'TextEdit', 'REC_DATE': 'TextEdit', 'PASSWORD': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_PIPE_12.set('fieldImages', {'PIPE_ID': 'TextEdit', 'PROJECT_NO': 'TextEdit', 'OLD_PROJEC': 'TextEdit', 'CONTRAC_DA': 'TextEdit', 'CAP_DATE': 'TextEdit', 'ASSET_CODE': 'TextEdit', 'PIPE_TYPE': 'TextEdit', 'GRADE': 'TextEdit', 'PIPE_SIZE': 'TextEdit', 'CLASS': 'TextEdit', 'PIPE_FUNC': 'TextEdit', 'LAYING': 'TextEdit', 'PRODUCT': 'TextEdit', 'DEPTH': 'TextEdit', 'PIPE_LONG': 'TextEdit', 'YEARINSTAL': 'TextEdit', 'LOCATE': 'TextEdit', 'PIPE_ID_PR': 'TextEdit', 'PWA_CODE': 'TextEdit', 'REC_DATE': 'TextEdit', 'PASSWORD': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_PIPE_13.set('fieldImages', {'PIPE_ID': 'TextEdit', 'PROJECT_NO': 'TextEdit', 'OLD_PROJEC': 'TextEdit', 'CONTRAC_DA': 'TextEdit', 'CAP_DATE': 'TextEdit', 'ASSET_CODE': 'TextEdit', 'PIPE_TYPE': 'TextEdit', 'GRADE': 'TextEdit', 'PIPE_SIZE': 'TextEdit', 'CLASS': 'TextEdit', 'PIPE_FUNC': 'TextEdit', 'LAYING': 'TextEdit', 'PRODUCT': 'TextEdit', 'DEPTH': 'TextEdit', 'PIPE_LONG': 'TextEdit', 'YEARINSTAL': 'TextEdit', 'LOCATE': 'TextEdit', 'PIPE_ID_PR': 'TextEdit', 'PWA_CODE': 'TextEdit', 'REC_DATE': 'TextEdit', 'PASSWORD': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_PIPE_1.set('fieldLabels', {'PIPE_ID': 'inline label - visible with data', 'PROJECT_NO': 'inline label - visible with data', 'OLD_PROJEC': 'inline label - visible with data', 'CONTRAC_DA': 'inline label - visible with data', 'CAP_DATE': 'inline label - visible with data', 'ASSET_CODE': 'inline label - visible with data', 'PIPE_TYPE': 'inline label - visible with data', 'GRADE': 'inline label - visible with data', 'PIPE_SIZE': 'inline label - visible with data', 'CLASS': 'inline label - visible with data', 'PIPE_FUNC': 'inline label - visible with data', 'LAYING': 'inline label - visible with data', 'PRODUCT': 'inline label - visible with data', 'DEPTH': 'inline label - visible with data', 'PIPE_LONG': 'inline label - visible with data', 'YEARINSTAL': 'inline label - visible with data', 'LOCATE': 'inline label - visible with data', 'PIPE_ID_PR': 'inline label - visible with data', 'PWA_CODE': 'inline label - visible with data', 'REC_DATE': 'inline label - visible with data', 'PASSWORD': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', 'Field23': 'inline label - visible with data', });
lyr_PIPE_2.set('fieldLabels', {'PIPE_ID': 'inline label - visible with data', 'PROJECT_NO': 'inline label - visible with data', 'OLD_PROJEC': 'inline label - visible with data', 'CONTRAC_DA': 'inline label - visible with data', 'CAP_DATE': 'inline label - visible with data', 'ASSET_CODE': 'inline label - visible with data', 'PIPE_TYPE': 'inline label - visible with data', 'GRADE': 'inline label - visible with data', 'PIPE_SIZE': 'inline label - visible with data', 'CLASS': 'inline label - visible with data', 'PIPE_FUNC': 'inline label - visible with data', 'LAYING': 'inline label - visible with data', 'PRODUCT': 'inline label - visible with data', 'DEPTH': 'inline label - visible with data', 'PIPE_LONG': 'inline label - visible with data', 'YEARINSTAL': 'inline label - visible with data', 'LOCATE': 'inline label - visible with data', 'PIPE_ID_PR': 'inline label - visible with data', 'PWA_CODE': 'inline label - visible with data', 'REC_DATE': 'inline label - visible with data', 'PASSWORD': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', });
lyr_PIPE_3.set('fieldLabels', {'PIPE_ID': 'inline label - visible with data', 'PROJECT_NO': 'inline label - visible with data', 'OLD_PROJEC': 'inline label - visible with data', 'CONTRAC_DA': 'inline label - visible with data', 'CAP_DATE': 'inline label - visible with data', 'ASSET_CODE': 'inline label - visible with data', 'PIPE_TYPE': 'inline label - visible with data', 'GRADE': 'inline label - visible with data', 'PIPE_SIZE': 'inline label - visible with data', 'CLASS': 'inline label - visible with data', 'PIPE_FUNC': 'inline label - visible with data', 'LAYING': 'inline label - visible with data', 'PRODUCT': 'inline label - visible with data', 'DEPTH': 'inline label - visible with data', 'PIPE_LONG': 'inline label - visible with data', 'YEARINSTAL': 'inline label - visible with data', 'LOCATE': 'inline label - visible with data', 'PIPE_ID_PR': 'inline label - visible with data', 'PWA_CODE': 'inline label - visible with data', 'REC_DATE': 'inline label - visible with data', 'PASSWORD': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', });
lyr_PIPE_4.set('fieldLabels', {'PIPE_ID': 'inline label - visible with data', 'PROJECT_NO': 'inline label - visible with data', 'OLD_PROJEC': 'inline label - visible with data', 'CONTRAC_DA': 'inline label - visible with data', 'CAP_DATE': 'inline label - visible with data', 'ASSET_CODE': 'inline label - visible with data', 'PIPE_TYPE': 'inline label - visible with data', 'GRADE': 'inline label - visible with data', 'PIPE_SIZE': 'inline label - visible with data', 'CLASS': 'inline label - visible with data', 'PIPE_FUNC': 'inline label - visible with data', 'LAYING': 'inline label - visible with data', 'PRODUCT': 'inline label - visible with data', 'DEPTH': 'inline label - visible with data', 'PIPE_LONG': 'inline label - visible with data', 'YEARINSTAL': 'inline label - visible with data', 'LOCATE': 'inline label - visible with data', 'PIPE_ID_PR': 'inline label - visible with data', 'PWA_CODE': 'inline label - visible with data', 'REC_DATE': 'inline label - visible with data', 'PASSWORD': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', });
lyr_PIPE_5.set('fieldLabels', {'PIPE_ID': 'inline label - visible with data', 'PROJECT_NO': 'inline label - visible with data', 'OLD_PROJEC': 'inline label - visible with data', 'CONTRAC_DA': 'inline label - visible with data', 'CAP_DATE': 'inline label - visible with data', 'ASSET_CODE': 'inline label - visible with data', 'PIPE_TYPE': 'inline label - visible with data', 'GRADE': 'inline label - visible with data', 'PIPE_SIZE': 'inline label - visible with data', 'CLASS': 'inline label - visible with data', 'PIPE_FUNC': 'inline label - visible with data', 'LAYING': 'inline label - visible with data', 'PRODUCT': 'inline label - visible with data', 'DEPTH': 'inline label - visible with data', 'PIPE_LONG': 'inline label - visible with data', 'YEARINSTAL': 'inline label - visible with data', 'LOCATE': 'inline label - visible with data', 'PIPE_ID_PR': 'inline label - visible with data', 'PWA_CODE': 'inline label - visible with data', 'REC_DATE': 'inline label - visible with data', 'PASSWORD': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', });
lyr_PIPE_6.set('fieldLabels', {'PIPE_ID': 'inline label - visible with data', 'PROJECT_NO': 'inline label - visible with data', 'OLD_PROJEC': 'inline label - visible with data', 'CONTRAC_DA': 'inline label - visible with data', 'CAP_DATE': 'inline label - visible with data', 'ASSET_CODE': 'inline label - visible with data', 'PIPE_TYPE': 'inline label - visible with data', 'GRADE': 'inline label - visible with data', 'PIPE_SIZE': 'inline label - visible with data', 'CLASS': 'inline label - visible with data', 'PIPE_FUNC': 'inline label - visible with data', 'LAYING': 'inline label - visible with data', 'PRODUCT': 'inline label - visible with data', 'DEPTH': 'inline label - visible with data', 'PIPE_LONG': 'inline label - visible with data', 'YEARINSTAL': 'inline label - visible with data', 'LOCATE': 'inline label - visible with data', 'PIPE_ID_PR': 'inline label - visible with data', 'PWA_CODE': 'inline label - visible with data', 'REC_DATE': 'inline label - visible with data', 'PASSWORD': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', });
lyr_PIPE_7.set('fieldLabels', {'PIPE_ID': 'inline label - visible with data', 'PROJECT_NO': 'inline label - visible with data', 'OLD_PROJEC': 'inline label - visible with data', 'CONTRAC_DA': 'inline label - visible with data', 'CAP_DATE': 'inline label - visible with data', 'ASSET_CODE': 'inline label - visible with data', 'PIPE_TYPE': 'inline label - visible with data', 'GRADE': 'inline label - visible with data', 'PIPE_SIZE': 'inline label - visible with data', 'CLASS': 'inline label - visible with data', 'PIPE_FUNC': 'inline label - visible with data', 'LAYING': 'inline label - visible with data', 'PRODUCT': 'inline label - visible with data', 'DEPTH': 'inline label - visible with data', 'PIPE_LONG': 'inline label - visible with data', 'YEARINSTAL': 'inline label - visible with data', 'LOCATE': 'inline label - visible with data', 'PIPE_ID_PR': 'inline label - visible with data', 'PWA_CODE': 'inline label - visible with data', 'REC_DATE': 'inline label - visible with data', 'PASSWORD': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', });
lyr_PIPE_8.set('fieldLabels', {'PIPE_ID': 'inline label - visible with data', 'PROJECT_NO': 'inline label - visible with data', 'OLD_PROJEC': 'inline label - visible with data', 'CONTRAC_DA': 'inline label - visible with data', 'CAP_DATE': 'inline label - visible with data', 'ASSET_CODE': 'inline label - visible with data', 'PIPE_TYPE': 'inline label - visible with data', 'GRADE': 'inline label - visible with data', 'PIPE_SIZE': 'inline label - visible with data', 'CLASS': 'inline label - visible with data', 'PIPE_FUNC': 'inline label - visible with data', 'LAYING': 'inline label - visible with data', 'PRODUCT': 'inline label - visible with data', 'DEPTH': 'inline label - visible with data', 'PIPE_LONG': 'inline label - visible with data', 'YEARINSTAL': 'inline label - visible with data', 'LOCATE': 'inline label - visible with data', 'PIPE_ID_PR': 'inline label - visible with data', 'PWA_CODE': 'inline label - visible with data', 'REC_DATE': 'inline label - visible with data', 'PASSWORD': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', });
lyr_PIPE_9.set('fieldLabels', {'PIPE_ID': 'inline label - visible with data', 'PROJECT_NO': 'inline label - visible with data', 'OLD_PROJEC': 'inline label - visible with data', 'CONTRAC_DA': 'inline label - visible with data', 'CAP_DATE': 'inline label - visible with data', 'ASSET_CODE': 'inline label - visible with data', 'PIPE_TYPE': 'inline label - visible with data', 'GRADE': 'inline label - visible with data', 'PIPE_SIZE': 'inline label - visible with data', 'CLASS': 'inline label - visible with data', 'PIPE_FUNC': 'inline label - visible with data', 'LAYING': 'inline label - visible with data', 'PRODUCT': 'inline label - visible with data', 'DEPTH': 'inline label - visible with data', 'PIPE_LONG': 'inline label - visible with data', 'YEARINSTAL': 'inline label - visible with data', 'LOCATE': 'inline label - visible with data', 'PIPE_ID_PR': 'inline label - visible with data', 'PWA_CODE': 'inline label - visible with data', 'REC_DATE': 'inline label - visible with data', 'PASSWORD': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', });
lyr_PIPE_10.set('fieldLabels', {'PIPE_ID': 'inline label - visible with data', 'PROJECT_NO': 'inline label - visible with data', 'OLD_PROJEC': 'inline label - visible with data', 'CONTRAC_DA': 'inline label - visible with data', 'CAP_DATE': 'inline label - visible with data', 'ASSET_CODE': 'inline label - visible with data', 'PIPE_TYPE': 'inline label - visible with data', 'GRADE': 'inline label - visible with data', 'PIPE_SIZE': 'inline label - visible with data', 'CLASS': 'inline label - visible with data', 'PIPE_FUNC': 'inline label - visible with data', 'LAYING': 'inline label - visible with data', 'PRODUCT': 'inline label - visible with data', 'DEPTH': 'inline label - visible with data', 'PIPE_LONG': 'inline label - visible with data', 'YEARINSTAL': 'inline label - visible with data', 'LOCATE': 'inline label - visible with data', 'PIPE_ID_PR': 'inline label - visible with data', 'PWA_CODE': 'inline label - visible with data', 'REC_DATE': 'inline label - visible with data', 'PASSWORD': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', });
lyr_PIPE_11.set('fieldLabels', {'PIPE_ID': 'inline label - visible with data', 'PROJECT_NO': 'inline label - visible with data', 'OLD_PROJEC': 'inline label - visible with data', 'CONTRAC_DA': 'inline label - visible with data', 'CAP_DATE': 'inline label - visible with data', 'ASSET_CODE': 'inline label - visible with data', 'PIPE_TYPE': 'inline label - visible with data', 'GRADE': 'inline label - visible with data', 'PIPE_SIZE': 'inline label - visible with data', 'CLASS': 'inline label - visible with data', 'PIPE_FUNC': 'inline label - visible with data', 'LAYING': 'inline label - visible with data', 'PRODUCT': 'inline label - visible with data', 'DEPTH': 'inline label - visible with data', 'PIPE_LONG': 'inline label - visible with data', 'YEARINSTAL': 'inline label - visible with data', 'LOCATE': 'inline label - visible with data', 'PIPE_ID_PR': 'inline label - visible with data', 'PWA_CODE': 'inline label - visible with data', 'REC_DATE': 'inline label - visible with data', 'PASSWORD': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', });
lyr_PIPE_12.set('fieldLabels', {'PIPE_ID': 'inline label - visible with data', 'PROJECT_NO': 'inline label - visible with data', 'OLD_PROJEC': 'inline label - visible with data', 'CONTRAC_DA': 'inline label - visible with data', 'CAP_DATE': 'inline label - visible with data', 'ASSET_CODE': 'inline label - visible with data', 'PIPE_TYPE': 'inline label - visible with data', 'GRADE': 'inline label - visible with data', 'PIPE_SIZE': 'inline label - visible with data', 'CLASS': 'inline label - visible with data', 'PIPE_FUNC': 'inline label - visible with data', 'LAYING': 'inline label - visible with data', 'PRODUCT': 'inline label - visible with data', 'DEPTH': 'inline label - visible with data', 'PIPE_LONG': 'inline label - visible with data', 'YEARINSTAL': 'inline label - visible with data', 'LOCATE': 'inline label - visible with data', 'PIPE_ID_PR': 'inline label - visible with data', 'PWA_CODE': 'inline label - visible with data', 'REC_DATE': 'inline label - visible with data', 'PASSWORD': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', });
lyr_PIPE_13.set('fieldLabels', {'PIPE_ID': 'inline label - visible with data', 'PROJECT_NO': 'inline label - visible with data', 'OLD_PROJEC': 'inline label - visible with data', 'CONTRAC_DA': 'inline label - visible with data', 'CAP_DATE': 'inline label - visible with data', 'ASSET_CODE': 'inline label - visible with data', 'PIPE_TYPE': 'inline label - visible with data', 'GRADE': 'inline label - visible with data', 'PIPE_SIZE': 'inline label - visible with data', 'CLASS': 'inline label - visible with data', 'PIPE_FUNC': 'inline label - visible with data', 'LAYING': 'inline label - visible with data', 'PRODUCT': 'inline label - visible with data', 'DEPTH': 'inline label - visible with data', 'PIPE_LONG': 'inline label - visible with data', 'YEARINSTAL': 'inline label - visible with data', 'LOCATE': 'inline label - visible with data', 'PIPE_ID_PR': 'inline label - visible with data', 'PWA_CODE': 'inline label - visible with data', 'REC_DATE': 'inline label - visible with data', 'PASSWORD': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', });
lyr_PIPE_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});