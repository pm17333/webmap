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
var format_PIPE11__6 = new ol.format.GeoJSON();
var features_PIPE11__6 = format_PIPE11__6.readFeatures(json_PIPE11__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PIPE11__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PIPE11__6.addFeatures(features_PIPE11__6);
var lyr_PIPE11__6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PIPE11__6, 
                style: style_PIPE11__6,
                popuplayertitle: "PIPE 11_พระพุทธบาท",
                interactive: true,
                title: '<img src="styles/legend/PIPE11__6.png" /> PIPE 11_พระพุทธบาท'
            });
var format_PIPE12__7 = new ol.format.GeoJSON();
var features_PIPE12__7 = format_PIPE12__7.readFeatures(json_PIPE12__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PIPE12__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PIPE12__7.addFeatures(features_PIPE12__7);
var lyr_PIPE12__7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PIPE12__7, 
                style: style_PIPE12__7,
                popuplayertitle: "PIPE 12_หนองแค",
                interactive: true,
                title: '<img src="styles/legend/PIPE12__7.png" /> PIPE 12_หนองแค'
            });
var format_PIPE13__8 = new ol.format.GeoJSON();
var features_PIPE13__8 = format_PIPE13__8.readFeatures(json_PIPE13__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PIPE13__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PIPE13__8.addFeatures(features_PIPE13__8);
var lyr_PIPE13__8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PIPE13__8, 
                style: style_PIPE13__8,
                popuplayertitle: "PIPE 13_มวกเหล็ก",
                interactive: true,
                title: '<img src="styles/legend/PIPE13__8.png" /> PIPE 13_มวกเหล็ก'
            });
var format_PIPE14__9 = new ol.format.GeoJSON();
var features_PIPE14__9 = format_PIPE14__9.readFeatures(json_PIPE14__9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PIPE14__9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PIPE14__9.addFeatures(features_PIPE14__9);
var lyr_PIPE14__9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PIPE14__9, 
                style: style_PIPE14__9,
                popuplayertitle: "PIPE 14_บ้านหมอ",
                interactive: true,
                title: '<img src="styles/legend/PIPE14__9.png" /> PIPE 14_บ้านหมอ'
            });
var format_PIPE15__10 = new ol.format.GeoJSON();
var features_PIPE15__10 = format_PIPE15__10.readFeatures(json_PIPE15__10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PIPE15__10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PIPE15__10.addFeatures(features_PIPE15__10);
var lyr_PIPE15__10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PIPE15__10, 
                style: style_PIPE15__10,
                popuplayertitle: "PIPE 15_ลพบุรี",
                interactive: true,
                title: '<img src="styles/legend/PIPE15__10.png" /> PIPE 15_ลพบุรี'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_PIPE_1.setVisible(true);lyr_PIPE_2.setVisible(true);lyr_PIPE_3.setVisible(true);lyr_PIPE_4.setVisible(true);lyr_PIPE_5.setVisible(true);lyr_PIPE11__6.setVisible(true);lyr_PIPE12__7.setVisible(true);lyr_PIPE13__8.setVisible(true);lyr_PIPE14__9.setVisible(true);lyr_PIPE15__10.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PIPE_1,lyr_PIPE_2,lyr_PIPE_3,lyr_PIPE_4,lyr_PIPE_5,lyr_PIPE11__6,lyr_PIPE12__7,lyr_PIPE13__8,lyr_PIPE14__9,lyr_PIPE15__10];
lyr_PIPE_1.set('fieldAliases', {'PIPE_ID': 'PIPE_ID', 'PROJECT_NO': 'PROJECT_NO', 'OLD_PROJEC': 'OLD_PROJEC', 'CONTRAC_DA': 'CONTRAC_DA', 'CAP_DATE': 'CAP_DATE', 'ASSET_CODE': 'ASSET_CODE', 'PIPE_TYPE': 'PIPE_TYPE', 'GRADE': 'GRADE', 'PIPE_SIZE': 'PIPE_SIZE', 'CLASS': 'CLASS', 'PIPE_FUNC': 'PIPE_FUNC', 'LAYING': 'LAYING', 'PRODUCT': 'PRODUCT', 'DEPTH': 'DEPTH', 'PIPE_LONG': 'PIPE_LONG', 'YEARINSTAL': 'YEARINSTAL', 'LOCATE': 'LOCATE', 'PIPE_ID_PR': 'PIPE_ID_PR', 'PWA_CODE': 'PWA_CODE', 'REC_DATE': 'REC_DATE', 'PASSWORD': 'PASSWORD', 'REMARK': 'REMARK', 'Field23': 'Field23', });
lyr_PIPE_2.set('fieldAliases', {'PIPE_ID': 'PIPE_ID', 'PROJECT_NO': 'PROJECT_NO', 'OLD_PROJEC': 'OLD_PROJEC', 'CONTRAC_DA': 'CONTRAC_DA', 'CAP_DATE': 'CAP_DATE', 'ASSET_CODE': 'ASSET_CODE', 'PIPE_TYPE': 'PIPE_TYPE', 'GRADE': 'GRADE', 'PIPE_SIZE': 'PIPE_SIZE', 'CLASS': 'CLASS', 'PIPE_FUNC': 'PIPE_FUNC', 'LAYING': 'LAYING', 'PRODUCT': 'PRODUCT', 'DEPTH': 'DEPTH', 'PIPE_LONG': 'PIPE_LONG', 'YEARINSTAL': 'YEARINSTAL', 'LOCATE': 'LOCATE', 'PIPE_ID_PR': 'PIPE_ID_PR', 'PWA_CODE': 'PWA_CODE', 'REC_DATE': 'REC_DATE', 'PASSWORD': 'PASSWORD', 'REMARK': 'REMARK', });
lyr_PIPE_3.set('fieldAliases', {'PIPE_ID': 'PIPE_ID', 'PROJECT_NO': 'PROJECT_NO', 'OLD_PROJEC': 'OLD_PROJEC', 'CONTRAC_DA': 'CONTRAC_DA', 'CAP_DATE': 'CAP_DATE', 'ASSET_CODE': 'ASSET_CODE', 'PIPE_TYPE': 'PIPE_TYPE', 'GRADE': 'GRADE', 'PIPE_SIZE': 'PIPE_SIZE', 'CLASS': 'CLASS', 'PIPE_FUNC': 'PIPE_FUNC', 'LAYING': 'LAYING', 'PRODUCT': 'PRODUCT', 'DEPTH': 'DEPTH', 'PIPE_LONG': 'PIPE_LONG', 'YEARINSTAL': 'YEARINSTAL', 'LOCATE': 'LOCATE', 'PIPE_ID_PR': 'PIPE_ID_PR', 'PWA_CODE': 'PWA_CODE', 'REC_DATE': 'REC_DATE', 'PASSWORD': 'PASSWORD', 'REMARK': 'REMARK', });
lyr_PIPE_4.set('fieldAliases', {'PIPE_ID': 'PIPE_ID', 'PROJECT_NO': 'PROJECT_NO', 'OLD_PROJEC': 'OLD_PROJEC', 'CONTRAC_DA': 'CONTRAC_DA', 'CAP_DATE': 'CAP_DATE', 'ASSET_CODE': 'ASSET_CODE', 'PIPE_TYPE': 'PIPE_TYPE', 'GRADE': 'GRADE', 'PIPE_SIZE': 'PIPE_SIZE', 'CLASS': 'CLASS', 'PIPE_FUNC': 'PIPE_FUNC', 'LAYING': 'LAYING', 'PRODUCT': 'PRODUCT', 'DEPTH': 'DEPTH', 'PIPE_LONG': 'PIPE_LONG', 'YEARINSTAL': 'YEARINSTAL', 'LOCATE': 'LOCATE', 'PIPE_ID_PR': 'PIPE_ID_PR', 'PWA_CODE': 'PWA_CODE', 'REC_DATE': 'REC_DATE', 'PASSWORD': 'PASSWORD', 'REMARK': 'REMARK', });
lyr_PIPE_5.set('fieldAliases', {'PIPE_ID': 'PIPE_ID', 'PROJECT_NO': 'PROJECT_NO', 'OLD_PROJEC': 'OLD_PROJEC', 'CONTRAC_DA': 'CONTRAC_DA', 'CAP_DATE': 'CAP_DATE', 'ASSET_CODE': 'ASSET_CODE', 'PIPE_TYPE': 'PIPE_TYPE', 'GRADE': 'GRADE', 'PIPE_SIZE': 'PIPE_SIZE', 'CLASS': 'CLASS', 'PIPE_FUNC': 'PIPE_FUNC', 'LAYING': 'LAYING', 'PRODUCT': 'PRODUCT', 'DEPTH': 'DEPTH', 'PIPE_LONG': 'PIPE_LONG', 'YEARINSTAL': 'YEARINSTAL', 'LOCATE': 'LOCATE', 'PIPE_ID_PR': 'PIPE_ID_PR', 'PWA_CODE': 'PWA_CODE', 'REC_DATE': 'REC_DATE', 'PASSWORD': 'PASSWORD', 'REMARK': 'REMARK', });
lyr_PIPE11__6.set('fieldAliases', {'PIPE_ID': 'PIPE_ID', 'PROJECT_NO': 'PROJECT_NO', 'OLD_PROJEC': 'OLD_PROJEC', 'CONTRAC_DA': 'CONTRAC_DA', 'CAP_DATE': 'CAP_DATE', 'ASSET_CODE': 'ASSET_CODE', 'PIPE_TYPE': 'PIPE_TYPE', 'GRADE': 'GRADE', 'PIPE_SIZE': 'PIPE_SIZE', 'CLASS': 'CLASS', 'PIPE_FUNC': 'PIPE_FUNC', 'LAYING': 'LAYING', 'PRODUCT': 'PRODUCT', 'DEPTH': 'DEPTH', 'PIPE_LONG': 'PIPE_LONG', 'YEARINSTAL': 'YEARINSTAL', 'LOCATE': 'LOCATE', 'PIPE_ID_PR': 'PIPE_ID_PR', 'PWA_CODE': 'PWA_CODE', 'REC_DATE': 'REC_DATE', 'PASSWORD': 'PASSWORD', 'REMARK': 'REMARK', });
lyr_PIPE12__7.set('fieldAliases', {'PIPE_ID': 'PIPE_ID', 'PROJECT_NO': 'PROJECT_NO', 'OLD_PROJEC': 'OLD_PROJEC', 'CONTRAC_DA': 'CONTRAC_DA', 'CAP_DATE': 'CAP_DATE', 'ASSET_CODE': 'ASSET_CODE', 'PIPE_TYPE': 'PIPE_TYPE', 'GRADE': 'GRADE', 'PIPE_SIZE': 'PIPE_SIZE', 'CLASS': 'CLASS', 'PIPE_FUNC': 'PIPE_FUNC', 'LAYING': 'LAYING', 'PRODUCT': 'PRODUCT', 'DEPTH': 'DEPTH', 'PIPE_LONG': 'PIPE_LONG', 'YEARINSTAL': 'YEARINSTAL', 'LOCATE': 'LOCATE', 'PIPE_ID_PR': 'PIPE_ID_PR', 'PWA_CODE': 'PWA_CODE', 'REC_DATE': 'REC_DATE', 'PASSWORD': 'PASSWORD', 'REMARK': 'REMARK', });
lyr_PIPE13__8.set('fieldAliases', {'PIPE_ID': 'PIPE_ID', 'PROJECT_NO': 'PROJECT_NO', 'OLD_PROJEC': 'OLD_PROJEC', 'CONTRAC_DA': 'CONTRAC_DA', 'CAP_DATE': 'CAP_DATE', 'ASSET_CODE': 'ASSET_CODE', 'PIPE_TYPE': 'PIPE_TYPE', 'GRADE': 'GRADE', 'PIPE_SIZE': 'PIPE_SIZE', 'CLASS': 'CLASS', 'PIPE_FUNC': 'PIPE_FUNC', 'LAYING': 'LAYING', 'PRODUCT': 'PRODUCT', 'DEPTH': 'DEPTH', 'PIPE_LONG': 'PIPE_LONG', 'YEARINSTAL': 'YEARINSTAL', 'LOCATE': 'LOCATE', 'PIPE_ID_PR': 'PIPE_ID_PR', 'PWA_CODE': 'PWA_CODE', 'REC_DATE': 'REC_DATE', 'PASSWORD': 'PASSWORD', 'REMARK': 'REMARK', });
lyr_PIPE14__9.set('fieldAliases', {'PIPE_ID': 'PIPE_ID', 'PROJECT_NO': 'PROJECT_NO', 'OLD_PROJEC': 'OLD_PROJEC', 'CONTRAC_DA': 'CONTRAC_DA', 'CAP_DATE': 'CAP_DATE', 'ASSET_CODE': 'ASSET_CODE', 'PIPE_TYPE': 'PIPE_TYPE', 'GRADE': 'GRADE', 'PIPE_SIZE': 'PIPE_SIZE', 'CLASS': 'CLASS', 'PIPE_FUNC': 'PIPE_FUNC', 'LAYING': 'LAYING', 'PRODUCT': 'PRODUCT', 'DEPTH': 'DEPTH', 'PIPE_LONG': 'PIPE_LONG', 'YEARINSTAL': 'YEARINSTAL', 'LOCATE': 'LOCATE', 'PIPE_ID_PR': 'PIPE_ID_PR', 'PWA_CODE': 'PWA_CODE', 'REC_DATE': 'REC_DATE', 'PASSWORD': 'PASSWORD', 'REMARK': 'REMARK', });
lyr_PIPE15__10.set('fieldAliases', {'PIPE_ID': 'PIPE_ID', 'PROJECT_NO': 'PROJECT_NO', 'OLD_PROJEC': 'OLD_PROJEC', 'CONTRAC_DA': 'CONTRAC_DA', 'CAP_DATE': 'CAP_DATE', 'ASSET_CODE': 'ASSET_CODE', 'PIPE_TYPE': 'PIPE_TYPE', 'GRADE': 'GRADE', 'PIPE_SIZE': 'PIPE_SIZE', 'CLASS': 'CLASS', 'PIPE_FUNC': 'PIPE_FUNC', 'LAYING': 'LAYING', 'PRODUCT': 'PRODUCT', 'DEPTH': 'DEPTH', 'PIPE_LONG': 'PIPE_LONG', 'YEARINSTAL': 'YEARINSTAL', 'LOCATE': 'LOCATE', 'PIPE_ID_PR': 'PIPE_ID_PR', 'PWA_CODE': 'PWA_CODE', 'REC_DATE': 'REC_DATE', 'PASSWORD': 'PASSWORD', 'REMARK': 'REMARK', });
lyr_PIPE_1.set('fieldImages', {'PIPE_ID': '', 'PROJECT_NO': '', 'OLD_PROJEC': '', 'CONTRAC_DA': '', 'CAP_DATE': '', 'ASSET_CODE': '', 'PIPE_TYPE': '', 'GRADE': '', 'PIPE_SIZE': '', 'CLASS': '', 'PIPE_FUNC': '', 'LAYING': '', 'PRODUCT': '', 'DEPTH': '', 'PIPE_LONG': '', 'YEARINSTAL': '', 'LOCATE': '', 'PIPE_ID_PR': '', 'PWA_CODE': '', 'REC_DATE': '', 'PASSWORD': '', 'REMARK': '', 'Field23': '', });
lyr_PIPE_2.set('fieldImages', {'PIPE_ID': '', 'PROJECT_NO': '', 'OLD_PROJEC': '', 'CONTRAC_DA': '', 'CAP_DATE': '', 'ASSET_CODE': '', 'PIPE_TYPE': '', 'GRADE': '', 'PIPE_SIZE': '', 'CLASS': '', 'PIPE_FUNC': '', 'LAYING': '', 'PRODUCT': '', 'DEPTH': '', 'PIPE_LONG': '', 'YEARINSTAL': '', 'LOCATE': '', 'PIPE_ID_PR': '', 'PWA_CODE': '', 'REC_DATE': '', 'PASSWORD': '', 'REMARK': '', });
lyr_PIPE_3.set('fieldImages', {'PIPE_ID': '', 'PROJECT_NO': '', 'OLD_PROJEC': '', 'CONTRAC_DA': '', 'CAP_DATE': '', 'ASSET_CODE': '', 'PIPE_TYPE': '', 'GRADE': '', 'PIPE_SIZE': '', 'CLASS': '', 'PIPE_FUNC': '', 'LAYING': '', 'PRODUCT': '', 'DEPTH': '', 'PIPE_LONG': '', 'YEARINSTAL': '', 'LOCATE': '', 'PIPE_ID_PR': '', 'PWA_CODE': '', 'REC_DATE': '', 'PASSWORD': '', 'REMARK': '', });
lyr_PIPE_4.set('fieldImages', {'PIPE_ID': '', 'PROJECT_NO': '', 'OLD_PROJEC': '', 'CONTRAC_DA': '', 'CAP_DATE': '', 'ASSET_CODE': '', 'PIPE_TYPE': '', 'GRADE': '', 'PIPE_SIZE': '', 'CLASS': '', 'PIPE_FUNC': '', 'LAYING': '', 'PRODUCT': '', 'DEPTH': '', 'PIPE_LONG': '', 'YEARINSTAL': '', 'LOCATE': '', 'PIPE_ID_PR': '', 'PWA_CODE': '', 'REC_DATE': '', 'PASSWORD': '', 'REMARK': '', });
lyr_PIPE_5.set('fieldImages', {'PIPE_ID': '', 'PROJECT_NO': '', 'OLD_PROJEC': '', 'CONTRAC_DA': '', 'CAP_DATE': '', 'ASSET_CODE': '', 'PIPE_TYPE': '', 'GRADE': '', 'PIPE_SIZE': '', 'CLASS': '', 'PIPE_FUNC': '', 'LAYING': '', 'PRODUCT': '', 'DEPTH': '', 'PIPE_LONG': '', 'YEARINSTAL': '', 'LOCATE': '', 'PIPE_ID_PR': '', 'PWA_CODE': '', 'REC_DATE': '', 'PASSWORD': '', 'REMARK': '', });
lyr_PIPE11__6.set('fieldImages', {'PIPE_ID': '', 'PROJECT_NO': '', 'OLD_PROJEC': '', 'CONTRAC_DA': '', 'CAP_DATE': '', 'ASSET_CODE': '', 'PIPE_TYPE': '', 'GRADE': '', 'PIPE_SIZE': '', 'CLASS': '', 'PIPE_FUNC': '', 'LAYING': '', 'PRODUCT': '', 'DEPTH': '', 'PIPE_LONG': '', 'YEARINSTAL': '', 'LOCATE': '', 'PIPE_ID_PR': '', 'PWA_CODE': '', 'REC_DATE': '', 'PASSWORD': '', 'REMARK': '', });
lyr_PIPE12__7.set('fieldImages', {'PIPE_ID': '', 'PROJECT_NO': '', 'OLD_PROJEC': '', 'CONTRAC_DA': '', 'CAP_DATE': '', 'ASSET_CODE': '', 'PIPE_TYPE': '', 'GRADE': '', 'PIPE_SIZE': '', 'CLASS': '', 'PIPE_FUNC': '', 'LAYING': '', 'PRODUCT': '', 'DEPTH': '', 'PIPE_LONG': '', 'YEARINSTAL': '', 'LOCATE': '', 'PIPE_ID_PR': '', 'PWA_CODE': '', 'REC_DATE': '', 'PASSWORD': '', 'REMARK': '', });
lyr_PIPE13__8.set('fieldImages', {'PIPE_ID': '', 'PROJECT_NO': '', 'OLD_PROJEC': '', 'CONTRAC_DA': '', 'CAP_DATE': '', 'ASSET_CODE': '', 'PIPE_TYPE': '', 'GRADE': '', 'PIPE_SIZE': '', 'CLASS': '', 'PIPE_FUNC': '', 'LAYING': '', 'PRODUCT': '', 'DEPTH': '', 'PIPE_LONG': '', 'YEARINSTAL': '', 'LOCATE': '', 'PIPE_ID_PR': '', 'PWA_CODE': '', 'REC_DATE': '', 'PASSWORD': '', 'REMARK': '', });
lyr_PIPE14__9.set('fieldImages', {'PIPE_ID': '', 'PROJECT_NO': '', 'OLD_PROJEC': '', 'CONTRAC_DA': '', 'CAP_DATE': '', 'ASSET_CODE': '', 'PIPE_TYPE': '', 'GRADE': '', 'PIPE_SIZE': '', 'CLASS': '', 'PIPE_FUNC': '', 'LAYING': '', 'PRODUCT': '', 'DEPTH': '', 'PIPE_LONG': '', 'YEARINSTAL': '', 'LOCATE': '', 'PIPE_ID_PR': '', 'PWA_CODE': '', 'REC_DATE': '', 'PASSWORD': '', 'REMARK': '', });
lyr_PIPE15__10.set('fieldImages', {'PIPE_ID': '', 'PROJECT_NO': '', 'OLD_PROJEC': '', 'CONTRAC_DA': '', 'CAP_DATE': '', 'ASSET_CODE': '', 'PIPE_TYPE': '', 'GRADE': '', 'PIPE_SIZE': '', 'CLASS': '', 'PIPE_FUNC': '', 'LAYING': '', 'PRODUCT': '', 'DEPTH': '', 'PIPE_LONG': '', 'YEARINSTAL': '', 'LOCATE': '', 'PIPE_ID_PR': '', 'PWA_CODE': '', 'REC_DATE': '', 'PASSWORD': '', 'REMARK': '', });
lyr_PIPE_1.set('fieldLabels', {'PIPE_ID': 'no label', 'PROJECT_NO': 'no label', 'OLD_PROJEC': 'no label', 'CONTRAC_DA': 'no label', 'CAP_DATE': 'no label', 'ASSET_CODE': 'no label', 'PIPE_TYPE': 'no label', 'GRADE': 'no label', 'PIPE_SIZE': 'no label', 'CLASS': 'no label', 'PIPE_FUNC': 'no label', 'LAYING': 'no label', 'PRODUCT': 'no label', 'DEPTH': 'no label', 'PIPE_LONG': 'no label', 'YEARINSTAL': 'no label', 'LOCATE': 'no label', 'PIPE_ID_PR': 'no label', 'PWA_CODE': 'no label', 'REC_DATE': 'no label', 'PASSWORD': 'no label', 'REMARK': 'no label', 'Field23': 'no label', });
lyr_PIPE_2.set('fieldLabels', {'PIPE_ID': 'no label', 'PROJECT_NO': 'no label', 'OLD_PROJEC': 'no label', 'CONTRAC_DA': 'no label', 'CAP_DATE': 'no label', 'ASSET_CODE': 'no label', 'PIPE_TYPE': 'no label', 'GRADE': 'no label', 'PIPE_SIZE': 'no label', 'CLASS': 'no label', 'PIPE_FUNC': 'no label', 'LAYING': 'no label', 'PRODUCT': 'no label', 'DEPTH': 'no label', 'PIPE_LONG': 'no label', 'YEARINSTAL': 'no label', 'LOCATE': 'no label', 'PIPE_ID_PR': 'no label', 'PWA_CODE': 'no label', 'REC_DATE': 'no label', 'PASSWORD': 'no label', 'REMARK': 'no label', });
lyr_PIPE_3.set('fieldLabels', {'PIPE_ID': 'no label', 'PROJECT_NO': 'no label', 'OLD_PROJEC': 'no label', 'CONTRAC_DA': 'no label', 'CAP_DATE': 'no label', 'ASSET_CODE': 'no label', 'PIPE_TYPE': 'no label', 'GRADE': 'no label', 'PIPE_SIZE': 'no label', 'CLASS': 'no label', 'PIPE_FUNC': 'no label', 'LAYING': 'no label', 'PRODUCT': 'no label', 'DEPTH': 'no label', 'PIPE_LONG': 'no label', 'YEARINSTAL': 'no label', 'LOCATE': 'no label', 'PIPE_ID_PR': 'no label', 'PWA_CODE': 'no label', 'REC_DATE': 'no label', 'PASSWORD': 'no label', 'REMARK': 'no label', });
lyr_PIPE_4.set('fieldLabels', {'PIPE_ID': 'no label', 'PROJECT_NO': 'no label', 'OLD_PROJEC': 'no label', 'CONTRAC_DA': 'no label', 'CAP_DATE': 'no label', 'ASSET_CODE': 'no label', 'PIPE_TYPE': 'no label', 'GRADE': 'no label', 'PIPE_SIZE': 'no label', 'CLASS': 'no label', 'PIPE_FUNC': 'no label', 'LAYING': 'no label', 'PRODUCT': 'no label', 'DEPTH': 'no label', 'PIPE_LONG': 'no label', 'YEARINSTAL': 'no label', 'LOCATE': 'no label', 'PIPE_ID_PR': 'no label', 'PWA_CODE': 'no label', 'REC_DATE': 'no label', 'PASSWORD': 'no label', 'REMARK': 'no label', });
lyr_PIPE_5.set('fieldLabels', {'PIPE_ID': 'no label', 'PROJECT_NO': 'no label', 'OLD_PROJEC': 'no label', 'CONTRAC_DA': 'no label', 'CAP_DATE': 'no label', 'ASSET_CODE': 'no label', 'PIPE_TYPE': 'no label', 'GRADE': 'no label', 'PIPE_SIZE': 'no label', 'CLASS': 'no label', 'PIPE_FUNC': 'no label', 'LAYING': 'no label', 'PRODUCT': 'no label', 'DEPTH': 'no label', 'PIPE_LONG': 'no label', 'YEARINSTAL': 'no label', 'LOCATE': 'no label', 'PIPE_ID_PR': 'no label', 'PWA_CODE': 'no label', 'REC_DATE': 'no label', 'PASSWORD': 'no label', 'REMARK': 'no label', });
lyr_PIPE11__6.set('fieldLabels', {'PIPE_ID': 'no label', 'PROJECT_NO': 'no label', 'OLD_PROJEC': 'no label', 'CONTRAC_DA': 'no label', 'CAP_DATE': 'no label', 'ASSET_CODE': 'no label', 'PIPE_TYPE': 'no label', 'GRADE': 'no label', 'PIPE_SIZE': 'no label', 'CLASS': 'no label', 'PIPE_FUNC': 'no label', 'LAYING': 'no label', 'PRODUCT': 'no label', 'DEPTH': 'no label', 'PIPE_LONG': 'no label', 'YEARINSTAL': 'no label', 'LOCATE': 'no label', 'PIPE_ID_PR': 'no label', 'PWA_CODE': 'no label', 'REC_DATE': 'no label', 'PASSWORD': 'no label', 'REMARK': 'no label', });
lyr_PIPE12__7.set('fieldLabels', {'PIPE_ID': 'no label', 'PROJECT_NO': 'no label', 'OLD_PROJEC': 'no label', 'CONTRAC_DA': 'no label', 'CAP_DATE': 'no label', 'ASSET_CODE': 'no label', 'PIPE_TYPE': 'no label', 'GRADE': 'no label', 'PIPE_SIZE': 'no label', 'CLASS': 'no label', 'PIPE_FUNC': 'no label', 'LAYING': 'no label', 'PRODUCT': 'no label', 'DEPTH': 'no label', 'PIPE_LONG': 'no label', 'YEARINSTAL': 'no label', 'LOCATE': 'no label', 'PIPE_ID_PR': 'no label', 'PWA_CODE': 'no label', 'REC_DATE': 'no label', 'PASSWORD': 'no label', 'REMARK': 'no label', });
lyr_PIPE13__8.set('fieldLabels', {'PIPE_ID': 'no label', 'PROJECT_NO': 'no label', 'OLD_PROJEC': 'no label', 'CONTRAC_DA': 'no label', 'CAP_DATE': 'no label', 'ASSET_CODE': 'no label', 'PIPE_TYPE': 'no label', 'GRADE': 'no label', 'PIPE_SIZE': 'no label', 'CLASS': 'no label', 'PIPE_FUNC': 'no label', 'LAYING': 'no label', 'PRODUCT': 'no label', 'DEPTH': 'no label', 'PIPE_LONG': 'no label', 'YEARINSTAL': 'no label', 'LOCATE': 'no label', 'PIPE_ID_PR': 'no label', 'PWA_CODE': 'no label', 'REC_DATE': 'no label', 'PASSWORD': 'no label', 'REMARK': 'no label', });
lyr_PIPE14__9.set('fieldLabels', {'PIPE_ID': 'no label', 'PROJECT_NO': 'no label', 'OLD_PROJEC': 'no label', 'CONTRAC_DA': 'no label', 'CAP_DATE': 'no label', 'ASSET_CODE': 'no label', 'PIPE_TYPE': 'no label', 'GRADE': 'no label', 'PIPE_SIZE': 'no label', 'CLASS': 'no label', 'PIPE_FUNC': 'no label', 'LAYING': 'no label', 'PRODUCT': 'no label', 'DEPTH': 'no label', 'PIPE_LONG': 'no label', 'YEARINSTAL': 'no label', 'LOCATE': 'no label', 'PIPE_ID_PR': 'no label', 'PWA_CODE': 'no label', 'REC_DATE': 'no label', 'PASSWORD': 'no label', 'REMARK': 'no label', });
lyr_PIPE15__10.set('fieldLabels', {'PIPE_ID': 'inline label - visible with data', 'PROJECT_NO': 'inline label - visible with data', 'OLD_PROJEC': 'inline label - visible with data', 'CONTRAC_DA': 'inline label - visible with data', 'CAP_DATE': 'inline label - visible with data', 'ASSET_CODE': 'inline label - visible with data', 'PIPE_TYPE': 'inline label - visible with data', 'GRADE': 'inline label - visible with data', 'PIPE_SIZE': 'inline label - visible with data', 'CLASS': 'inline label - visible with data', 'PIPE_FUNC': 'inline label - visible with data', 'LAYING': 'inline label - visible with data', 'PRODUCT': 'inline label - visible with data', 'DEPTH': 'inline label - visible with data', 'PIPE_LONG': 'inline label - visible with data', 'YEARINSTAL': 'inline label - visible with data', 'LOCATE': 'inline label - visible with data', 'PIPE_ID_PR': 'inline label - visible with data', 'PWA_CODE': 'inline label - visible with data', 'REC_DATE': 'inline label - visible with data', 'PASSWORD': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', });
lyr_PIPE15__10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});