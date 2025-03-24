var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_GISANIWIUPANI_1 = new ol.format.GeoJSON();
var features_GISANIWIUPANI_1 = format_GISANIWIUPANI_1.readFeatures(json_GISANIWIUPANI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GISANIWIUPANI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GISANIWIUPANI_1.addFeatures(features_GISANIWIUPANI_1);
var lyr_GISANIWIUPANI_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GISANIWIUPANI_1, 
                style: style_GISANIWIUPANI_1,
                popuplayertitle: "GIS ANI — WIUP ANI",
                interactive: true,
                title: '<img src="styles/legend/GISANIWIUPANI_1.png" /> GIS ANI — WIUP ANI'
            });
var format_Infrastruktur_2 = new ol.format.GeoJSON();
var features_Infrastruktur_2 = format_Infrastruktur_2.readFeatures(json_Infrastruktur_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infrastruktur_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infrastruktur_2.addFeatures(features_Infrastruktur_2);
var lyr_Infrastruktur_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infrastruktur_2, 
                style: style_Infrastruktur_2,
                popuplayertitle: "Infrastruktur",
                interactive: true,
    title: 'Infrastruktur<br />\
    <img src="styles/legend/Infrastruktur_2_0.png" /> EFO<br />\
    <img src="styles/legend/Infrastruktur_2_1.png" /> JETTY PT ANI<br />\
    <img src="styles/legend/Infrastruktur_2_2.png" /> OFFICE PT ANI<br />\
    <img src="styles/legend/Infrastruktur_2_3.png" /> PIT<br />\
    <img src="styles/legend/Infrastruktur_2_4.png" /> WORKSHOP<br />\
    <img src="styles/legend/Infrastruktur_2_5.png" /> <br />'
        });
var format_Road_3 = new ol.format.GeoJSON();
var features_Road_3 = format_Road_3.readFeatures(json_Road_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_3.addFeatures(features_Road_3);
var lyr_Road_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_3, 
                style: style_Road_3,
                popuplayertitle: "Road",
                interactive: true,
    title: 'Road<br />\
    <img src="styles/legend/Road_3_0.png" /> EFO - JETTY<br />\
    <img src="styles/legend/Road_3_1.png" /> PIT - EFO<br />\
    <img src="styles/legend/Road_3_2.png" /> <br />'
        });
var lyr_D90bargeani_modified_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "D90 barge ani_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/D90bargeani_modified_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [14285360.785481, 73396.140645, 14285493.466011, 73595.556321]
                            })
                        });
var format_SlotJetty_5 = new ol.format.GeoJSON();
var features_SlotJetty_5 = format_SlotJetty_5.readFeatures(json_SlotJetty_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SlotJetty_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SlotJetty_5.addFeatures(features_SlotJetty_5);
var lyr_SlotJetty_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SlotJetty_5, 
                style: style_SlotJetty_5,
                popuplayertitle: "Slot Jetty",
                interactive: true,
    title: 'Slot Jetty<br />\
    <img src="styles/legend/SlotJetty_5_0.png" /> SLOT 1<br />\
    <img src="styles/legend/SlotJetty_5_1.png" /> SLOT 2<br />\
    <img src="styles/legend/SlotJetty_5_2.png" /> SLOT 3<br />\
    <img src="styles/legend/SlotJetty_5_3.png" /> SLOT 4<br />\
    <img src="styles/legend/SlotJetty_5_4.png" /> <br />'
        });
var format_Barge_6 = new ol.format.GeoJSON();
var features_Barge_6 = format_Barge_6.readFeatures(json_Barge_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Barge_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barge_6.addFeatures(features_Barge_6);
var lyr_Barge_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Barge_6, 
                style: style_Barge_6,
                popuplayertitle: "Barge",
                interactive: true,
    title: 'Barge<br />\
    <img src="styles/legend/Barge_6_0.png" /> DBS 3303<br />\
    <img src="styles/legend/Barge_6_1.png" /> LL 3202<br />\
    <img src="styles/legend/Barge_6_2.png" /> NUSANTARA 3007<br />\
    <img src="styles/legend/Barge_6_3.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_GISANIWIUPANI_1.setVisible(true);lyr_Infrastruktur_2.setVisible(true);lyr_Road_3.setVisible(true);lyr_D90bargeani_modified_4.setVisible(true);lyr_SlotJetty_5.setVisible(true);lyr_Barge_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GISANIWIUPANI_1,lyr_Infrastruktur_2,lyr_Road_3,lyr_D90bargeani_modified_4,lyr_SlotJetty_5,lyr_Barge_6];
lyr_GISANIWIUPANI_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_Infrastruktur_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Description': 'Description', });
lyr_Road_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Description': 'Description', 'Doc.': 'Doc.', 'Lenght (Km)': 'Lenght (Km)', });
lyr_SlotJetty_5.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Barge': 'Barge', 'Buyer': 'Buyer', 'Progress': 'Progress', });
lyr_Barge_6.set('fieldAliases', {'fid': 'fid', 'Bg': 'Bg', 'Tiba': 'Tiba', 'Sandar': 'Sandar', 'Commence Load': 'Commence Load', 'Buyer': 'Buyer', 'Material': 'Material', 'Plan QT (wmt)': 'Plan QT (wmt)', });
lyr_GISANIWIUPANI_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_Infrastruktur_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Description': 'TextEdit', });
lyr_Road_3.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Description': 'TextEdit', 'Doc.': 'TextEdit', 'Lenght (Km)': 'Range', });
lyr_SlotJetty_5.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Barge': 'TextEdit', 'Buyer': 'TextEdit', 'Progress': 'TextEdit', });
lyr_Barge_6.set('fieldImages', {'fid': 'TextEdit', 'Bg': 'TextEdit', 'Tiba': 'DateTime', 'Sandar': 'DateTime', 'Commence Load': 'DateTime', 'Buyer': 'TextEdit', 'Material': 'TextEdit', 'Plan QT (wmt)': 'Range', });
lyr_GISANIWIUPANI_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_Infrastruktur_2.set('fieldLabels', {'fid': 'no label', 'ID': 'inline label - always visible', 'Description': 'no label', });
lyr_Road_3.set('fieldLabels', {'fid': 'hidden field', 'ID': 'inline label - always visible', 'Description': 'no label', 'Doc.': 'no label', 'Lenght (Km)': 'inline label - always visible', });
lyr_SlotJetty_5.set('fieldLabels', {'fid': 'hidden field', 'ID': 'no label', 'Barge': 'inline label - always visible', 'Buyer': 'inline label - always visible', 'Progress': 'inline label - always visible', });
lyr_Barge_6.set('fieldLabels', {'fid': 'hidden field', 'Bg': 'inline label - always visible', 'Tiba': 'inline label - always visible', 'Sandar': 'inline label - always visible', 'Commence Load': 'inline label - always visible', 'Buyer': 'inline label - always visible', 'Material': 'inline label - always visible', 'Plan QT (wmt)': 'inline label - always visible', });
lyr_Barge_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});