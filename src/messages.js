﻿module.exports = {
    devices: {
        cd_changer: 0x18,
        mfl: 0x50,
        radio: 0x68,
        ike: 0x80,
        mid: 0xc0,
        lcm: 0xbf,
        tel: 0xc8,
        obc_textbar: 0xe7
    },
    
    messages: {
        //From CD changer
        cdc_announceCd: { src: 0x18, dst: 0xff, msg: new Buffer.from([0x02, 0x01]) },
        cdc_respondAsCd: { src: 0x18, dst: 0x68, msg: new Buffer.from([0x02, 0x00]) },
        // last byte is CD #, second last byte is track # 
        cdc_playing0101: { src: 0x18, dst: 0x68, msg: new Buffer.from([0x39, 0x00, 0x09, 0x00, 0x3f, 0x00, 0x01, 0x01]) },
        cdc_playingXX: { src: 0x18, dst: 0x68, msg: new Buffer.from([0x39, 0x00, 0x09, 0x00, 0x3f, 0x00]) }, // last two bytes to be filled at send time
        
        //From radio
        rad_cdReqParams: { src: 0x68, dst: 0x18, msg: new Buffer.from([0x38, 0x00, 0x00]) },
        rad_cdReqPlay: { src: 0x68, dst: 0x18, msg: new Buffer.from([0x38, 0x03, 0x00]) },
        rad_cdPool: { src: 0x68, dst: 0x18, msg: new Buffer.from([0x01]) },
        replace_rad2mid_CD0101: { src: 0x68, dst: 0xc0, msg: new Buffer.from([0x24, 0x40, 0x00, 0x31, 0x2d, 0x30, 0x31, 0x20, 0x20, 0x20, 0x20]) },
        //SCAN <Buffer 68 12 c0 23 40 20 53 43 41 4e 20 03 20 20 20 20 20 20
        //CD 1-01 <Buffer 68 12 c0 23 40 20 43 44 20 03 31 2d 30 31 20 20 20 20
        replace_rad2midCDbuttons: { src: 0x68, dst: 0xc0, msg: new Buffer.from([0x21, 0x40, 0x00, 0x00, 0x20, 0x31, 0x05, 0x32, 0x20, 0x05, 0x20, 0x33, 0x05, 0x34, 0x20, 0x05, 0x20, 0x35, 0x05, 0x36, 0x20, 0x05, 0x05, 0x05, 0x52, 0x4e, 0x44, 0x20]) },
        ph7090_arrow_right: { src: 0x68 , dst: 0x18, msg: new Buffer.from([0x38, 0x0a, 0x00]) },
        ph7090_arrow_left: { src: 0x68 , dst: 0x18, msg: new Buffer.from([0x38, 0x0a, 0x01]) },
        ph7090_1_press: { src: 0x68 , dst: 0x18, msg: new Buffer.from([0x38, 0x06, 0x01]) },
        ph7090_2_press: { src: 0x68 , dst: 0x18, msg: new Buffer.from([0x38, 0x06, 0x02]) },
        ph7090_3_press: { src: 0x68 , dst: 0x18, msg: new Buffer.from([0x38, 0x06, 0x03]) },
        ph7090_4_press: { src: 0x68 , dst: 0x18, msg: new Buffer.from([0x38, 0x06, 0x04]) },
        ph7090_5_press: { src: 0x68 , dst: 0x18, msg: new Buffer.from([0x38, 0x06, 0x05]) },
        ph7090_6_press: { src: 0x68 , dst: 0x18, msg: new Buffer.from([0x38, 0x06, 0x06]) },

        // OnBoardMonitor
        volume_up: { src: 0xf0, dst: 0x68, msg: new Buffer.from([0x32, 0x11])},
        volume_down: { src: 0xf0, dst: 0x68, msg: new Buffer.from([0x32, 0x10])},

        //MFL buttons wheel
        previous_press: { src: 0x50, dst: 0x68, msg: new Buffer.from([0x3b, 0x08]) },
        previous_hold: { src: 0x50, dst: 0x68, msg: new Buffer.from([0x3b, 0x18]) },
        previous_release: { src: 0x50, dst: 0x68, msg: new Buffer.from([0x3b, 0x28]) },
        next_press: { src: 0x50, dst: 0x68, msg: new Buffer.from([0x3b, 0x01]) },
        next_hold: { src: 0x50, dst: 0x68, msg: new Buffer.from([0x3b, 0x11]) },
        next_release: { src: 0x50, dst: 0x68, msg: new Buffer.from([0x3b, 0x21]) },
        volume_up_press: { src: 0x50, dst: 0x68, msg: new Buffer.from([0x32, 0x11]) },
        volume_up_hold: { src: 0x50, dst: 0x68, msg: new Buffer.from([0x32, 0x21]) },
        volume_up_release: { src: 0x50, dst: 0x68, msg: new Buffer.from([0x32, 0x31]) },
        volume_down_press: { src: 0x50, dst: 0x68, msg: new Buffer.from([0x32, 0x10]) },
        volume_down_hold: { src: 0x50, dst: 0x68, msg: new Buffer.from([0x32, 0x20]) },
        volume_down_release: { src: 0x50, dst: 0x68, msg: new Buffer.from([0x32, 0x30]) },
        r_t_press: { src: 0x50, dst: 0xc8, msg: new Buffer.from([0x01]) },
        
        
        mid_1_press: { src: 0xC0, dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x00]) },
        mid_1_hold: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x20]) },
        mid_1_release: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x40]) },
        mid_2_press: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x01]) },
        mid_2_hold: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x21]) },
        mid_2_release: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x41]) },
        mid_3_press: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x02]) },
        mid_3_hold: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x22]) },
        mid_3_release: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x42]) },
        mid_4_press: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x03]) },
        mid_4_hold: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x23]) },
        mid_4_release: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x43]) },
        mid_5_press: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x04]) },
        mid_5_hold: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x24]) },
        mid_5_release: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x44]) },
        mid_6_press: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x05]) },
        mid_6_hold: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x25]) },
        mid_6_release: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x45]) },
        mid_fm_press: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x06]) },
        mid_fm_hold: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x26]) },
        mid_fm_release: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x46]) },
        mid_am_press: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x07]) },
        mid_am_hold: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x27]) },
        mid_am_release: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x47]) },
        mid_rds_press: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x08]) },
        mid_rds_hold: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x28]) },
        mid_rds_release: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x48]) },
        mid_tp_press: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x09]) },
        mid_tp_hold: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x29]) },
        mid_tp_release: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x49]) },
        mid_rev_press: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x00, 0x00, 0x0C]) },
        mid_rev_hold: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x00, 0x00, 0x2C]) },
        mid_rev_release: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x00, 0x00, 0x4C]) },
        mid_ff_press: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x00, 0x00, 0x0D]) },
        mid_ff_hold: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x00, 0x00, 0x2D]) },
        mid_ff_release: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x00, 0x00, 0x4D]) },
        mid_m_press: { src: 0xC0, dst: 0x68, msg: new Buffer.from([0x31, 0x00, 0x00, 0x0E]) },
        cd_button_press: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x0B]) },
        cd_button_hold: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x2B]) },
        cd_button_release: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x4B]) },
        mid_turnknob_off: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x22, 0x00]) },
        mid_on_1: { src: 0xC0 , dst: 0x80, msg: new Buffer.from([0x01]) },
        mid_on_2: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x01]) },
        cd_sc_press: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x0a]) },
        cd_sc_hold: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x2a]) },
        cd_sc_release: { src: 0xC0 , dst: 0x68, msg: new Buffer.from([0x31, 0x40, 0x00, 0x4a]) },

        //Test
        //test: { src: 0x80, dst: 0xe7, msg: new Buffer.from([0x2a, 0x00, 0x00]) }
    },
    
    messageParts: {
        mid_buttons_for_replaceStart: {
            src: 0x68, dst: 0xc0, msg: new Buffer.from([0x21, 0x40, 0x00, 0x09])
        },
        mid_buttons_for_replaceEnd: {
            src: 0x68, dst: 0xc0, msg: new Buffer.from([0x43, 0x44])
        },
        //display 1 value to replace
        //not working replace_rad2mid_CD0101Start: { src: 0x68, dst: 0xc0, msg: new Buffer.from([0x23, 0x40, 0x00]) },
        //from old replace_rad2mid_CD0101: { src: 0x68, dst: 0xc0, msg: new Buffer.from([0x23, 0x40, 0x20, 0x43, 0x44, 0x20, 0x03, 0x31, 0x2d, 0x30, 0x31, 0x20, 0x20, 0x20, 0x20]) },
    }
}

// src len dst 23 c0 30 .. .. .. .. .. .. .. .. .. .. - text on top
// 680f3b23c530<11 chars> - show fast forward symbol
// 680f3b23c630<11 chars> - show fast reward symbol


// 6804183806<01/02/../06>  - chage CD

// f003683210 - volume knob turn left
// f003683211 - volume knob turn right
// f003684806 - volume knob down
// f003684886 - volume knob up
// f003684846 - volume knob press and hold

// 6802f4a00 - pause
// 6802f4aff - unpause

// 680418380801 - potential Random ON

// 680418380100 MODE switched to radio
// 8003bf1100 key turn of

// 680418380401 fast forward
// 680418380400 fast backward

// 3F05000C5401CK - Passenger Front Window: Open
// 3F05000C5201CK - Driver Front Window: Open
// 3F05000C5501CK - Passenger Front Window: Close
// 3F05000C5301CK - Driver Front Window: Close

// 3F05000C3401CK - All Doors: Lock
// 3F05000C3501CK - All Doors: Unlock
