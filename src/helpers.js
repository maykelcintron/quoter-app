export function calculatePorcent(mount, months){
    let commission;
    if (mount && months) {
        if (months <= 3) {
          commission = 0.02;
        } else if (months <= 6) {
          commission = 0.03
        } else if (months <= 12) {
          commission = 0.04;
        } else if (months <= 24) {
          commission = 0.05;
        }
    }

    const result = mount * commission / 100;
    return [mount < 100? result.toFixed(4) : result.toFixed(3), result * 100];
}